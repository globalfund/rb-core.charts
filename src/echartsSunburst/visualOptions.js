export const visualOptions = {
  centerX: {
    type: "number",
    label: "Center X-axis (%)",
    default: 50,
    group: "artboard",
    max: 100,
    min: 0,
  },
  centerY: {
    type: "number",
    label: "Center Y-axis (%)",
    default: 50,
    group: "artboard",
    max: 100,
    min: 0,
  },

  showLabels: {
    type: "text",
    label: "Show labels",
    group: "labels",
    options: ["false", "leaf", "true"],
    default: "leaf",
  },
  leafLabelPositon: {
    type: "text",
    label: "Leaf label position",
    group: "labels",
    options: ["inside", "outside"],
    default: "inside",
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
  borderWidth: {
    type: "number",
    label: "Item Border width",
    default: 1,
    group: "artboard",
  },
  borderRadius: {
    type: "number",
    label: "Item Border radius",
    default: 0,
    group: "artboard",
  },
};
