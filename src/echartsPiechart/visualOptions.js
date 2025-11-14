export const visualOptions = {
  // Artboard
  marginTop: {
    type: "number",
    label: "Margin (top)",
    default: 0,
    group: "artboard",
  },

  marginRight: {
    type: "number",
    label: "Margin (right)",
    default: 0,
    group: "artboard",
  },

  marginBottom: {
    type: "number",
    label: "Margin (bottom)",
    default: 0,
    group: "artboard",
  },

  marginLeft: {
    type: "number",
    label: "Margin (left)",
    default: 0,
    group: "artboard",
  },

  showLegend: {
    type: "boolean",
    label: "Show legend",
    default: false,
    group: "artboard",
  },
  // chart

  drawDonut: {
    type: "boolean",
    label: "Draw as donuts",
    default: false,
    group: "chart",
  },
  arcThickness: {
    type: "number",
    label: "Donut thickness percentage",
    default: 50,
    max: 100,
    min: 10,
    group: "chart",
    disabled: {
      drawDonut: false,
    },
  },
  showTooltip: {
    type: "boolean",
    label: "Show tooltip",
    default: true,
    group: "Tooltip",
  },
  isMonetaryValue: {
    type: "boolean",
    label: "Is monetary value?",
    default: false,
    group: "Tooltip",
    disabled: {
      showTooltip: false,
    },
  },
  showLabel: {
    type: "boolean",
    label: "Show label",
    default: true,
    group: "Label",
  },
  labelPosition: {
    type: "text",
    label: "Label position",
    options: ["outside", "inside", "center"],
    default: "right",
    group: "Label",
    disabled: {
      showLabel: false,
    },
  },
  labelFontSize: {
    type: "number",
    label: "Label font size",
    default: 12,
    group: "Label",
    disabled: {
      showLabel: false,
    },
  },
  palette: {
    type: "radioGroup",
    label: "Dataxplorer",
    group: "Color palette",
    default: "Dataxplorer",
  },
};
