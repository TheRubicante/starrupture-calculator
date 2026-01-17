import { Recipes } from "./data.js";

const RailSpeeds = { 1: 2, 2: 4, 3: 8 };

const itemSelect = document.getElementById("item");
const machineFilter = document.getElementById("machineFilter");
const output = document.getElementById("output");
const machineSummaryOutput = document.getElementById("machine-summary-output");

/* --------------------------------------------------
   MACHINE FILTER + TARGET ITEM POPULATION
-------------------------------------------------- */

const machineTypes = Array.from(
  new Set(Object.values(Recipes).map((r) => r.machine)),
).sort((a, b) => a.localeCompare(b));

machineFilter.innerHTML = `<option value="ALL">All</option>`;
machineTypes.forEach((machine) => {
  const opt = document.createElement("option");
  opt.value = machine;
  opt.textContent = machine;
  machineFilter.appendChild(opt);
});

function populateTargetItems(machineType = "ALL") {
  itemSelect.innerHTML = "";

  const filteredRecipes = Object.values(Recipes)
    .filter((r) => machineType === "ALL" || r.machine === machineType)
    .sort((a, b) => a.output.name.localeCompare(b.output.name));

  filteredRecipes.forEach((recipe) => {
    const opt = document.createElement("option");
    opt.value = recipe.output.name.toUpperCase();
    opt.textContent = recipe.output.name;
    itemSelect.appendChild(opt);
  });
}

populateTargetItems();

machineFilter.addEventListener("change", () => {
  populateTargetItems(machineFilter.value);
});

/* --------------------------------------------------
   PRODUCTION TREE
-------------------------------------------------- */

function buildNode(itemId, targetRateSec) {
  const recipe = Recipes[itemId];
  if (!recipe) return null;

  const outputRatePerSec = recipe.output.qty / recipe.cycleTime;
  const machinesExact = targetRateSec / outputRatePerSec;

  const inputs = recipe.inputs.map((input) => {
    const inputTargetRate =
      ((input.qty / recipe.cycleTime) * targetRateSec) /
      outputRatePerSec;
    return buildNode(input.name.toUpperCase(), inputTargetRate);
  });

  return {
    item: recipe.output.name,
    recipe,
    rateSec: targetRateSec,
    machinesExact,
    outputRatePerSec,
    inputs,
  };
}

function formatNumber(num) {
  return num % 1 === 0 ? num.toString() : num.toFixed(1);
}

function formatMachines(node) {
  const rounded = Math.ceil(node.machinesExact);
  return rounded !== node.machinesExact ? `${rounded}*` : `${rounded}`;
}

function formatRate(node, rateType) {
  const rounded = Math.ceil(node.machinesExact);
  const rateActual = rounded * node.outputRatePerSec;
  const value = rateType === "min" ? rateActual * 60 : rateActual;
  const unit = rateType === "min" ? " /m" : " /s";
  const suffix = rounded !== node.machinesExact ? "*" : "";
  return `${formatNumber(value)}${unit}${suffix}`;
}

function computeInputOutputRates(node) {
  const inputRate = node.inputs.reduce(
    (sum, child) => sum + child.rateSec,
    0,
  );
  return { inputRate, outputRate: node.rateSec };
}

function formatRails(ratePerSec, railSpeed, rateType) {
  const railsRequired = Math.ceil(ratePerSec / railSpeed);
  const maxRate = railsRequired * railSpeed;
  const displayRate = rateType === "min" ? ratePerSec * 60 : ratePerSec;
  const displayMax = rateType === "min" ? maxRate * 60 : maxRate;
  const unit = rateType === "min" ? " /m" : " /s";

  return `<span class="rail-count">${railsRequired}</span><span class="rail-note">(${formatNumber(displayRate)}${unit} of ${formatNumber(displayMax)}${unit})</span>`;
}

function renderRows(node, rateType, railLevel, depth = 0, rows = []) {
  const { inputRate, outputRate } = computeInputOutputRates(node);

  const tdInRails =
    inputRate === 0
      ? "N/A"
      : formatRails(inputRate, RailSpeeds[railLevel], rateType);

  const tdOutRails = formatRails(
    outputRate,
    RailSpeeds[railLevel],
    rateType,
  );

  const indentSymbol = depth === 0 ? "" : "└─ ";
  const indent = "  ".repeat(Math.max(0, depth - 1));

  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td class="item"><span class="indent">${indent}${indentSymbol}</span>${node.item}</td>
    <td>${node.recipe.machine}</td>
    <td class="num">${formatMachines(node)}</td>
    <td class="num">${formatRate(node, rateType)}</td>
    <td class="num rail-cell">${tdInRails}</td>
    <td class="num rail-cell">${tdOutRails}</td>
  `;

  rows.push(tr);

  node.inputs.forEach((child) =>
    renderRows(child, rateType, railLevel, depth + 1, rows),
  );

  return rows;
}

/* --------------------------------------------------
   NEW: MACHINE SUMMARY
-------------------------------------------------- */

function collectMachines(node, summary) {
  const machine = node.recipe.machine;
  const item = node.item;
  const count = Math.ceil(node.machinesExact);

  if (!summary[machine]) {
    summary[machine] = { total: 0, breakdown: {} };
  }

  summary[machine].total += count;
  summary[machine].breakdown[item] =
    (summary[machine].breakdown[item] || 0) + count;

  node.inputs.forEach((child) => collectMachines(child, summary));
}

function renderMachineSummary(summary) {
  machineSummaryOutput.innerHTML = "";

  Object.entries(summary).forEach(([machine, data]) => {
    const tr = document.createElement("tr");

    const breakdown = Object.entries(data.breakdown)
      .map(([item, count]) => `${count} ${item}`)
      .join(", ");

    tr.innerHTML = `
      <td>${machine}</td>
      <td class="num">${data.total}</td>
      <td>${breakdown}</td>
    `;

    machineSummaryOutput.appendChild(tr);
  });
}

/* --------------------------------------------------
   CALCULATE
-------------------------------------------------- */

function calculate() {
  const item = itemSelect.value;
  const rawRate = parseFloat(document.getElementById("rate").value);
  const rateType = document.getElementById("rateType").value;
  const railLevel = parseInt(
    document.getElementById("railLevel").value,
    10,
  );

  const rateSec = rateType === "min" ? rawRate / 60 : rawRate;

  output.innerHTML = "";
  machineSummaryOutput.innerHTML = "";

  const tree = buildNode(item, rateSec);

  renderRows(tree, rateType, railLevel).forEach((r) =>
    output.appendChild(r),
  );

  const summary = {};
  collectMachines(tree, summary);
  renderMachineSummary(summary);
}

/* --------------------------------------------------
   EVENTS
-------------------------------------------------- */

document.getElementById("calc-form").addEventListener("submit", (e) => {
  e.preventDefault();
  calculate();
});

document.getElementById("calculate-btn").addEventListener("click", calculate);

const rateInput = document.getElementById("rate");
const rateTypeSelect = document.getElementById("rateType");

rateTypeSelect.addEventListener("change", () => {
  let val = parseFloat(rateInput.value);
  if (isNaN(val)) return;

  val =
    rateTypeSelect.value === "min" ? val * 60 : val / 60;

  rateInput.value =
    val % 1 === 0 ? val.toString() : val.toFixed(1);

  calculate();
});
