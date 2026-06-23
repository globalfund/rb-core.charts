export const dimensions = [
  {
    id: "bars",
    name: "Category",
    validTypes: ["number", "string", "date"],
    required: true,
    operation: "get",
    description:
      "The different categories or subgroups represented by each bar in the bar chart.",
  },
  {
    id: "size",
    name: "Value",
    operation: "get",
    validTypes: ["number"],
    required: true,
    aggregation: true,
    aggregationDefault: "sum",
    description:
      "The values corresponding to each category that determine the height or length of the column.",
  },
  {
    id: "breakdown",
    name: "Breakdown",
    operation: "get",
    validTypes: ["number", "string", "date"],
    required: false,
    description: "Group or stack bars by another category.",
  },
];
