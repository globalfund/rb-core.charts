export const dimensions = [
  {
    id: "x",
    name: "X Axis",
    validTypes: ["number", "date"],
    required: true,
    description:
      "Represents the independent variable plotted on the horizontal axis, determining each bubble's position.",
  },
  {
    id: "y",
    name: "Y Axis",
    validTypes: ["number", "date"],
    required: true,
    description:
      "Represents the dependent variable plotted on the vertical axis, determining each bubble's vertical position.",
  },
  {
    id: "size",
    name: "Size",
    validTypes: ["number"],
    required: false,
    description:
      "Indicates the size of each bubble. Larger bubbles show greater values, adding more information.",
  },

  {
    id: "label",
    name: "Label",
    validTypes: ["number", "date", "string"],
    required: false,
    description:
      "Descriptive text or identifiers for each bubble. Labels identify what each bubble represents.",
  },
];
