export const dimensions = [
  {
    id: "category",
    name: "Category",
    validTypes: ["number", "string", "date"],
    required: true,
    description:
      "Represents distinct groups being compared. Each category is a slice of the pie.",
  },
  {
    id: "value",
    name: "Value",
    validTypes: ["number"],
    required: true,
    aggregation: true,
    aggregationDefault: {
      number: "sum",
    },
    description:
      "Quantitative measurement for each category. Each slice in the pie chart shows its proportion of the total.",
  },
];
