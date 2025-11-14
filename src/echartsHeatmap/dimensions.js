export const dimensions = [
  {
    id: "x",
    name: "X Axis",
    validTypes: ["number", "string", "date"],
    required: true,
    description:
      "Represents the categories or variables along the horizontal axis.",
  },
  {
    id: "y",
    name: "Y Axis",
    validTypes: ["number", "string", "date"],
    required: true,
    description:
      "Represents the categories or variables along the vertical axis.",
  },
  {
    id: "size",
    name: "Size",
    validTypes: ["number"],
    required: false,
    aggregation: true,
    aggregationDefault: "sum",
    description:
      "Represents the value or magnitude. The color of each cell reflects the size at the intersection of the X and Y axes.",
  },
];
