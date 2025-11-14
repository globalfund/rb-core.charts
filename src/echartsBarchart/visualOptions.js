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
  autoBarWidth: {
    type: "boolean",
    label: "Auto bar width",
    default: true,
    group: "Chart",
  },
  barWidth: {
    type: "number",
    label: "Bar Width",
    default: 35,
    group: "Chart",
    disabled: {
      autoBarWidth: true,
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
  label: {
    type: "boolean",
    label: "Show label",
    default: true,
    group: "Chart",
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
    default: true,
    group: "Chart",
  },
  logarithmicYAxis: {
    type: "boolean",
    label: "Logarithmic Y Axis",
    default: false,
    group: "Chart",
  },
  barColor: {
    type: "color",
    label: "Bar Color",
    group: "color",
    default: "#5470c6",
    disabled: {
      stack: true,
    },
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
