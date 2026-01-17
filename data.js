export const Recipes = {
  //Beginning Extractor Recipes
  "TITANIUM ORE": {
    output: { name: "Titanium Ore", qty: 2 },
    inputs: [],
    cycleTime: 2,
    machine: "Extractor",
  },
  "WOLFRAM ORE": {
    output: { name: "Wolfram Ore", qty: 2 },
    inputs: [],
    cycleTime: 2,
    machine: "Extractor",
  },
  "CALCIUM ORE": {
    output: { name: "Calcium Ore", qty: 2 },
    inputs: [],
    cycleTime: 2,
    machine: "Extractor",
  },

  //Unique Extractors
  "HELIUM-3": {
    output: { name: "Helium-3", qty: 8 },
    inputs: [],
    cycleTime: 2,
    machine: "Extractor",
  },
  "SULPHUR ORE": {
    output: { name: "Sulphur Ore", qty: 8 },
    inputs: [],
    cycleTime: 2,
    machine: "Extractor",
  },

  //Beginning Smelter Recipes
  "TITANIUM BAR": {
    output: { name: "Titanium Bar", qty: 2 },
    inputs: [{ name: "Titanium Ore", qty: 2 }],
    cycleTime: 2,
    machine: "Smelter",
  },
  "WOLFRAM BAR": {
    output: { name: "Wolfram Bar", qty: 2 },
    inputs: [{ name: "Wolfram ore", qty: 2 }],
    cycleTime: 2,
    machine: "Smelter",
  },
  "CALCIUM BLOCK": {
    output: { name: "Calcium Block", qty: 2 },
    inputs: [{ name: "Calcium ore", qty: 2 }],
    cycleTime: 2,
    machine: "Smelter",
  },

  //Beginning Fabricator Recipes
  "BASIC BUILDING MATERIAL": {
    output: { name: "Basic Building Material", qty: 10 },
    inputs: [
      { name: "Wolfram ore", qty: 1 },
      { name: "Titanium ore", qty: 1 },
    ],
    cycleTime: 2,
    machine: "Fabricator",
  },
  "PISTOL AMMO": {
    output: { name: "Pistol Ammo", qty: 25 },
    inputs: [{ name: "Basic Building Material", qty: 14 }],
    cycleTime: 4,
    machine: "Fabricator",
  },
  "TITANIUM ROD": {
    output: { name: "Titanium Rod", qty: 1 },
    inputs: [{ name: "Titanium bar", qty: 1 }],
    cycleTime: 2,
    machine: "Fabricator",
  },
  "WOLFRAM WIRE": {
    output: { name: "Wolfram Wire", qty: 2 },
    inputs: [{ name: "Wolfram bar", qty: 1 }],
    cycleTime: 4,
    machine: "Fabricator",
  },
  "CALCITE SHEETS": {
    output: { name: "Calcite Sheets", qty: 2 },
    inputs: [{ name: "Calcium Block", qty: 1 }],
    cycleTime: 2,
    machine: "Fabricator",
  },
  "TITANIUM BEAM": {
    output: { name: "Titanium Beam", qty: 1 },
    inputs: [{ name: "Titanium bar", qty: 1 }],
    cycleTime: 3,
    machine: "Fabricator",
  },
  "TITANIUM SHEET": {
    output: { name: "Titanium Sheet", qty: 2 },
    inputs: [{ name: "Titanium bar", qty: 1 }],
    cycleTime: 2,
    machine: "Fabricator",
  },
  "WOLFRAM PLATE": {
    output: { name: "Wolfram Plate", qty: 1 },
    inputs: [{ name: "Wolfram bar", qty: 1 }],
    cycleTime: 1,
    machine: "Fabricator",
  },
  ROTOR: {
    output: { name: "Rotor", qty: 1 },
    inputs: [
      { name: "Titanium Rod", qty: 2 },
      { name: "Wolfram Wire", qty: 2 },
    ],
    cycleTime: 6,
    machine: "Fabricator",
  },
  TUBE: {
    output: { name: "Tube", qty: 2 },
    inputs: [
      { name: "Titanium Rod", qty: 1 },
      { name: "Titanium Sheet", qty: 1 },
    ],
    cycleTime: 2,
    machine: "Fabricator",
  },
  STABILIZER: {
    output: { name: "Stabilizer", qty: 1 },
    inputs: [
      { name: "Rotor", qty: 1 },
      { name: "Titanium Rod", qty: 2 },
    ],
    cycleTime: 6,
    machine: "Fabricator",
  },
  STATOR: {
    output: { name: "Stator", qty: 1 },
    inputs: [
      { name: "Titanium Housing", qty: 2 },
      { name: "Wolfram Wire", qty: 1 },
    ],
    cycleTime: 3,
    machine: "Fabricator",
  },
  APPLICATOR: {
    output: { name: "Applicator", qty: 1 },
    inputs: [
      { name: "Tube", qty: 8 },
      { name: "Glass", qty: 2 },
    ],
    cycleTime: 4,
    machine: "Fabricator",
  },

  //Beginning Furnace Recipes
  "WOLFRAM POWDER": {
    output: { name: "Wolfram Powder", qty: 3 },
    inputs: [{ name: "Wolfram Bar", qty: 1 }],
    cycleTime: 2,
    machine: "Furnace",
  },
  "CALCIUM POWDER": {
    output: { name: "Calcium Powder", qty: 3 },
    inputs: [{ name: "Calcium Block", qty: 1 }],
    cycleTime: 3,
    machine: "Furnace",
  },
  CERAMICS: {
    output: { name: "Ceramics", qty: 2 },
    inputs: [
      { name: "Calcite Sheets", qty: 1 },
      { name: "Wolfram Powder", qty: 1 },
    ],
    cycleTime: 2,
    machine: "Furnace",
  },
  "TITANIUM HOUSING": {
    output: { name: "Titanium Housing", qty: 1 },
    inputs: [
      { name: "Titanium Beam", qty: 1 },
      { name: "Titanium Sheet", qty: 2 },
    ],
    cycleTime: 2,
    machine: "Furnace",
  },
  GLASS: {
    output: { name: "Glass", qty: 1 },
    inputs: [
      { name: "Helium-3", qty: 1 },
      { name: "Calcium Powder", qty: 2 },
    ],
    cycleTime: 3,
    machine: "Furnace",
  },
  INDUCTOR: {
    output: { name: "Inductor", qty: 1 },
    inputs: [
      { name: "Tube", qty: 2 },
      { name: "Wolfram Wire", qty: 1 },
      { name: "Ceramics", qty: 2 },
    ],
    cycleTime: 3,
    machine: "Furnace",
  },
  "HEAT RESISTANT SHEET": {
    output: { name: "Heat Resistant Sheet", qty: 1 },
    inputs: [
      { name: "Wolfram Plate", qty: 1 },
      { name: "Titanium Sheet", qty: 2 },
      { name: "Glass", qty: 1 },
    ],
    cycleTime: 4,
    machine: "Furnace",
  },
  "SYNTHETIC SILICON": {
    output: { name: "Synthetic Silicon", qty: 2 },
    inputs: [
      { name: "Calcium Powder", qty: 2 },
      { name: "Helium-3", qty: 1 },
      { name: "Ceramics", qty: 2 },
    ],
    cycleTime: 2,
    machine: "Furnace",
  },
  ELECTRONICS: {
    output: { name: "Electronics", qty: 1 },
    inputs: [
      { name: "Synthetic Silicon", qty: 2 },
      { name: "Inductor", qty: 1 },
      { name: "Stator", qty: 1 },
    ],
    cycleTime: 5,
    machine: "Furnace",
  },
  CHEMICALS: {
    output: { name: "Chemicals", qty: 2 },
    inputs: [
      { name: "Synthetic Silicon", qty: 1 },
      { name: "Wolfram Powder", qty: 3 },
      { name: "Helium-3", qty: 1 },
    ],
    cycleTime: 2,
    machine: "Furnace",
  },
  "HARDENING AGENT": {
    output: { name: "Hardening Agent", qty: 2 },
    inputs: [
      { name: "Sulfuric Acid", qty: 5 },
      { name: "Synthetic Silicon", qty: 1 },
      { name: "Applicator", qty: 1 },
    ],
    cycleTime: 4,
    machine: "Furnace",
  },
  SUPERMAGNET: {
    output: { name: "Supermagnet", qty: 1 },
    inputs: [
      { name: "Sulfuric Acid", qty: 5 },
      { name: "Wolfram Plate", qty: 5 },
      { name: "Chemicals", qty: 2 },
    ],
    cycleTime: 3,
    machine: "Furnace",
  },

  //Beginning Mega Press Recipes
  "INTERMEDIATE BUILDING MATERIAL": {
    output: { name: "Intermediate Building Material", qty: 25 },
    inputs: [
      { name: "Basic Building Material", qty: 40 },
      { name: "Inductor", qty: 2 },
      { name: "Glass", qty: 2 },
      { name: "Titanium Housing", qty: 2 },
    ],
    cycleTime: 6,
    machine: "Mega Press",
  },
  "STANDARD AMMO": {
    output: { name: "Standard Ammo", qty: 20 },
    inputs: [
      { name: "Basic Building Material", qty: 15 },
      { name: "Wolfram Powder", qty: 4 },
    ],
    cycleTime: 6,
    machine: "Mega Press",
  },
  "SHOTGUN AMMO": {
    output: { name: "Shotgun Ammo", qty: 15 },
    inputs: [
      { name: "Basic Building Material", qty: 20 },
      { name: "Calcium Powder", qty: 6 },
    ],
    cycleTime: 6,
    machine: "Mega Press",
  },
  "HEAVY AMMO": {
    output: { name: "Heavy Ammo", qty: 15 },
    inputs: [
      { name: "Basic Building Material", qty: 24 },
      { name: "Titanium Rod", qty: 6 },
    ],
    cycleTime: 6,
    machine: "Mega Press",
  },
  IMPELLER: {
    output: { name: "Impeller", qty: 1 },
    inputs: [
      { name: "Titanium Rod", qty: 2 },
      { name: "Heat Resistant Sheet", qty: 2 },
      { name: "Wolfram Plate", qty: 1 },
      { name: "Stabilizer", qty: 1 },
    ],
    cycleTime: 4,
    machine: "Mega Press",
  },
  NOZZLE: {
    output: { name: "Nozzle", qty: 1 },
    inputs: [
      { name: "Heat Resistant Sheet", qty: 2 },
      { name: "Helium-3", qty: 1 },
      { name: "Stabilizer", qty: 2 },
    ],
    cycleTime: 5,
    machine: "Mega Press",
  },
  BATTERY: {
    output: { name: "Battery", qty: 1 },
    inputs: [
      { name: "Inductor", qty: 2 },
      { name: "Electronics", qty: 2 },
      { name: "Sulfuric Acid", qty: 1 },
    ],
    cycleTime: 4,
    machine: "Mega Press",
  },
  TURBINE: {
    output: { name: "Turbine", qty: 1 },
    inputs: [
      { name: "Impeller", qty: 1 },
      { name: "Stator", qty: 1 },
      { name: "Rotor", qty: 2 },
      { name: "Sulfuric Acid", qty: 2 },
    ],
    cycleTime: 6,
    machine: "Mega Press",
  },
  VALVE: {
    output: { name: "Valve", qty: 1 },
    inputs: [
      { name: "Titanium Housing", qty: 1 },
      { name: "Titanium Beam", qty: 3 },
      { name: "Titanium Rod", qty: 2 },
      { name: "Nozzle", qty: 1 },
    ],
    cycleTime: 10,
    machine: "Mega Press",
  },
  "ELECTROMAGNETIC COIL": {
    output: { name: "Electromagnetic Coil", qty: 1 },
    inputs: [
      { name: "Inductor", qty: 1 },
      { name: "Pressurized Helium", qty: 1 },
      { name: "Wolfram Plate", qty: 6 },
      { name: "Supermagnet", qty: 1 },
    ],
    cycleTime: 4,
    machine: "Mega Press",
  },
  PUMP: {
    output: { name: "Pump", qty: 1 },
    inputs: [
      { name: "Valve", qty: 1 },
      { name: "Turbine", qty: 1 },
      { name: "Impeller", qty: 1 },
      { name: "Sulfuric Acid", qty: 3 },
    ],
    cycleTime: 10,
    machine: "Mega Press",
  },

  //Beginning Refinery Recipes
  "SULFURIC ACID": {
    output: { name: "Sulfuric Acid", qty: 1 },
    inputs: [
      { name: "Sulphur Ore", qty: 2 },
      { name: "Chemicals", qty: 1 },
    ],
    cycleTime: 0.5,
    machine: "Refinery",
  },
  "PRESSURIZED HELIUM": {
    output: { name: "Pressurized Helium", qty: 1 },
    inputs: [
      { name: "Sulphur Ore", qty: 1 },
      { name: "Helium-3", qty: 1 },
    ],
    cycleTime: 2,
    machine: "Refinery",
  },

  //beginning Assembler Recipes
  ACCUMULATOR: {
    output: { name: "Accumulator", qty: 1 },
    inputs: [
      { name: "Electronics", qty: 2 },
      { name: "Stator", qty: 1 },
      { name: "Battery", qty: 2 },
    ],
    cycleTime: 6,
    machine: "Assembler",
  },
  CONDENSER: {
    output: { name: "Condenser", qty: 1 },
    inputs: [
      { name: "Resonator", qty: 1 },
      { name: "Synthetic Resin", qty: 3 },
      { name: "Nanofibre", qty: 8 },
      { name: "Pump", qty: 3 },
    ],
    cycleTime: 15,
    machine: "Assembler",
  },
  ELECTROMAGNET: {
    output: { name: "Electromagnet", qty: 1 },
    inputs: [
      { name: "Electromagnetic Coil", qty: 3 },
      { name: "Synthetic Resin", qty: 3 },
      { name: "Accumulator", qty: 2 },
    ],
    cycleTime: 5,
    machine: "Assembler",
  },
  "LASER EMITTER": {
    output: { name: "Laser Emitter", qty: 1 },
    inputs: [
      { name: "Lens", qty: 2 },
      { name: "Resonator", qty: 1 },
      { name: "Electromagnetic Coil", qty: 6 },
    ],
    cycleTime: 6,
    machine: "Assembler",
  },
  "PRESSURE TANK": {
    output: { name: "Pressure Tank", qty: 1 },
    inputs: [
      { name: "Heat Resistant Sheet", qty: 5 },
      { name: "Titanium Housing", qty: 3 },
      { name: "Pump", qty: 3 },
      { name: "Valve", qty: 2 },
    ],
    cycleTime: 12,
    machine: "Assembler",
  },
  RESONATOR: {
    output: { name: "Resonator", qty: 1 },
    inputs: [
      { name: "Accumulator", qty: 1 },
      { name: "Generator", qty: 2 },
      { name: "Liquid Helium", qty: 2 },
    ],
    cycleTime: 12,
    machine: "Assembler",
  },

  //Placeholder Recipes
  "SYNTHETIC RESIN": {
    output: { name: "Synthetic Resin", qty: 1 },
    inputs: [],
    cycleTime: 1,
    machine: "PlaceHolder",
  },
  NANOFIBRE: {
    output: { name: "Nanofibre", qty: 1 },
    inputs: [],
    cycleTime: 1,
    machine: "PlaceHolder",
  },
  GENERATOR: {
    output: { name: "Generator", qty: 1 },
    inputs: [],
    cycleTime: 1,
    machine: "PlaceHolder",
  },
  "LIQUID HELIUM": {
    output: { name: "Liquid Helium", qty: 1 },
    inputs: [],
    cycleTime: 1,
    machine: "PlaceHolder",
  },
  LENS: {
    output: { name: "Lens", qty: 1 },
    inputs: [],
    cycleTime: 1,
    machine: "PlaceHolder",
  },
};
