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
  lineType: {
    type: "text",
    label: "Line type",
    group: "chart",
    // min: 1,
    options: ["solid", "dotted", "dashed"],
    default: "solid",
  },
  lineWidth: {
    type: "number",
    label: "Line width",
    default: 1,
    group: "chart",
    min: 1,
    // max: 3,
  },
  smoothLine: {
    type: "boolean",
    label: "Smooth line",
    default: false,
    group: "chart",
  },
  // stack: {
  //   type: 'boolean',
  //   label: 'Stack lines',
  //   default: false,
  //   group: 'chart',
  // },
  // showArea: {
  //   type: 'boolean',
  //   label: 'Show Area',
  //   default: false,
  //   group: 'chart',
  // },
  showLegend: {
    type: "boolean",
    label: "Show legend",
    default: true,
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
    label: "TGF Default",
    group: "Color palette",
    default: "TGF Default",
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
