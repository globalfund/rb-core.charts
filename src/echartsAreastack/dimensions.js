export const dimensions = [
  {
    id: "x",
    name: "X Axis",
    operation: "get",
    validTypes: ["number", "string", "date"],
    required: true,
    description:
      "X axis shows the independent variable, like time or categories, positioning data points horizontally.",
  },
  {
    id: "y",
    name: "Y Axis",
    validTypes: ["number"],
    required: true,
    multiple: true,
    operation: "get",
    aggregation: true,
    aggregationDefault: "sum",
    description:
      "Y axis shows the dependent variable values plotted vertically, changing with the X axis.",
  },
];
