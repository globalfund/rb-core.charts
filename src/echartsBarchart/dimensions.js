export const dimensions = [
  {
    id: "bars",
    name: "Bars",
    validTypes: ["number", "string", "date"],
    required: true,
    operation: "get",
    description:
      "The different categories or subgroups represented by each bar in the bar chart.",
  },
  {
    id: "size",
    name: "Size",
    operation: "get",
    validTypes: ["number"],
    required: false,
    aggregation: true,
    aggregationDefault: "sum",
    description:
      "The values corresponding to each category that determine the height or length of the column.",
  },
];
