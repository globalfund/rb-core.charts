export const dimensions = [
  {
    id: "hierarchy",
    name: "Hierarchy",
    validTypes: ["number", "date", "string"],
    required: true,
    multiple: true,
    description:
      "Represents the levels of organization or categorization. It shows how data is nested within different groups.",
  },
  {
    id: "size",
    name: "Size",
    validTypes: ["number"],
    required: false,
    aggregation: true,
    aggregationDefault: "sum",
    description:
      "Represents the quantitative value of each category. The size of each box in the tree map reflects the magnitude of the associated value.",
  },
];
