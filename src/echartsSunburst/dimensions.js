export const dimensions = [
  {
    id: "hierarchy",
    name: "Hierarchy",
    validTypes: ["number", "date", "string"],
    required: true,
    multiple: true,
    description:
      "Shows levels of nested categories and how parts relate within a structure.",
  },
  {
    id: "size",
    name: "Size",
    validTypes: ["number"],
    required: false,
    aggregation: true,
    aggregationDefault: "sum",
    description:
      "Represents the quantitative value for each segment. The size of each slice in the sunburst chart reflects its value relative to the whole.",
  },
];
