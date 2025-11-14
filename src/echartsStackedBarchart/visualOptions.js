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
  barWidth: {
    type: "number",
    label: "Bar Width",
    default: 35,
    group: "Chart",
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
  label: {
    type: "boolean",
    label: "Show label",
    default: true,
    group: "Chart",
  },
  labelFontSize: {
    type: "number",
    label: "Label font size",
    default: 10,
    group: "Chart",
    disabled: {
      label: false,
    },
  },
  realTimeSort: {
    type: "boolean",
    label: "Real time sort",
    default: false,
    group: "Chart",
  },
  dataZoom: {
    type: "boolean",
    label: "Show Data Zoom",
    default: false,
    group: "Chart",
  },
  legend: {
    type: "boolean",
    label: "Show legend",
    default: false,
    group: "Chart",
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
