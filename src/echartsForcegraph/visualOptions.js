export const visualOptions = {
  marginTop: {
    type: "number",
    label: "Margin (top)",
    default: 10,
    group: "artboard",
  },
  marginRight: {
    type: "number",
    label: "Margin (right)",
    default: 50,
    group: "artboard",
  },
  marginBottom: {
    type: "number",
    label: "Margin (bottom)",
    default: 10,
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
  linksOpacity: {
    type: "number",
    label: "Links opacity (0-1)",
    default: 0.5,
    step: 0.1,
    min: 0,
    max: 1,
    group: "chart",
  },

  forceRepulsion: {
    type: "number",
    label: "Force Repulsion (10-100)",
    default: 100,
    step: 10,
    min: 10,
    max: 100,
    group: "chart",
  },
  roam: {
    type: "boolean",
    label: "Roam",
    group: "chart",
    default: false,
  },
  showLabels: {
    type: "boolean",
    label: "Show labels",
    default: true,
    group: "labels",
  },
  labelFontSize: {
    type: "number",
    label: "Label font size",
    default: 12,
    group: "labels",
    disabled: {
      showLabels: false,
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
  palette: {
    type: "radioGroup",
    label: "Dataxplorer",
    group: "Color palette",
    default: "Dataxplorer",
  },
};
