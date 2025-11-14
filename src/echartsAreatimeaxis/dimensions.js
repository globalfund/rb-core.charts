export const dimensions = [
  {
    id: "x",
    name: "X Axis",
    operation: "get",
    validTypes: ["number", "date"],
    required: true,
    description:
      "Represents the time dimension, showing the progression or sequence over time.",
  },
  {
    id: "y",
    name: "Y Axis",
    operation: "get",
    validTypes: ["number", "date"],
    required: true,
    aggregation: true,
    aggregationDefault: "sum",
    description:
      "Represents the quantitative values that change over time. It indicates the magnitude of data points corresponding to each time interval on the X-axis.",
  },
];
