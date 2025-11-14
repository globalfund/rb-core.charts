export const dimensions = [
  {
    id: "x",
    name: "X Axis",
    operation: "get",
    validTypes: ["number", "date"],
    required: true,
    description:
      "Represents the independent variable or input data. It determines the horizontal position of each point on the chart.",
  },
  {
    id: "y",
    name: "Y Axis",
    operation: "get",
    validTypes: ["number", "date"],
    required: true,
    description:
      "Represents the dependent variable or output data. It determines the vertical position of each point on the chart.",
  },
];
