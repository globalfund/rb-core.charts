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
    id: "sizes",
    name: "Sizes",
    validTypes: ["number"],
    required: true,
    multiple: true,
    operation: "get",
    aggregation: true,
    aggregationDefault: {
      number: "sum",
    },
    description:
      "The values corresponding to each category that determine the height or length of the column.",
  },
];
