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
  symbolSize: {
    type: "number",
    label: "Symbol size (0-20)",
    default: 10,
    step: 1,
    min: 0,
    max: 20,
    group: "chart",
  },
  dataZoom: {
    type: "boolean",
    label: "Show Data Zoom",
    default: false,
    group: "chart",
  },
  trendline: {
    type: "text",
    label: "Trendline",
    default: "None",
    group: "chart",
    options: ["None", "Exponential", "Linear", "Logarithmic", "Polynomial"],
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
