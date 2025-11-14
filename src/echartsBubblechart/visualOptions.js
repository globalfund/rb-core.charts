export const visualOptions = {
  marginTop: {
    type: "number",
    label: "Margin (top)",
    default: 30,
    group: "artboard",
  },
  marginRight: {
    type: "number",
    label: "Margin (right)",
    default: 10,
    group: "artboard",
  },
  marginBottom: {
    type: "number",
    label: "Margin (bottom)",
    default: 50,
    group: "artboard",
  },
  marginLeft: {
    type: "number",
    label: "Margin (left)",
    default: 10,
    group: "artboard",
  },
  showLegend: {
    type: "boolean",
    label: "Show legend",
    default: false,
    group: "chart",
  },
  dataZoom: {
    type: "boolean",
    label: "Show Data Zoom",
    default: false,
    group: "chart",
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
  showLabels: {
    type: "boolean",
    label: "Show label",
    default: false,
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
  palette: {
    type: "radioGroup",
    label: "Dataxplorer",
    group: "Color palette",
    default: "Dataxplorer",
  },
  customYAxisName: {
    type: "boolean",
    label: "Custom Y Axis Name",
    default: false,
    group: "Y Axis",
  },
  yAxisName: {
    type: "text",
    label: "Y Axis Name",
    default: "",
    group: "Y Axis",
    disabled: {
      customYAxisName: false,
    },
  },
};
