export const visualOptions = {
  showLegend: {
    type: "boolean",
    label: "Show legend",
    default: false,
    group: "artboard",
  },
  showTooltip: {
    type: "boolean",
    label: "Show tooltip",
    default: true,
    group: "tooltip",
  },
  isMonetaryValue: {
    type: "boolean",
    label: "Is monetary value?",
    default: false,
    group: "tooltip",
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
