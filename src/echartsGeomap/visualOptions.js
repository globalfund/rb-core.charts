export const visualOptions = {
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
    default: true,
    group: "artboard",
  },

  roam: {
    type: "text",
    label: "Roam",
    group: "chart",
    // default: 1,
    // min: 1,
    options: ["none", "scale", "move", "both"],
    default: "none",
  },
  showAntarctica: {
    type: "boolean",
    label: "Show Antarctica",
    default: false,
    group: "chart",
  },
  scaleLimitMin: {
    type: "number",
    label: "Min",
    group: "Scale limit",
    // default: 1,

    default: 1,
  },
  scaleLimitMax: {
    type: "number",
    label: "Max",
    group: "Scale limit",
    // default: 1,

    default: 1,
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
  palette: {
    type: "radioGroup",
    label: "Dataxplorer",
    group: "Color palette",
    default: "Dataxplorer",
  },
};
