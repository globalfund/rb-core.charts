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
  nodeClick: {
    type: "text",
    label: "Node click",
    group: "artboard",
    options: ["false", "zoomToNode"],
    default: "zoomToNode",
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
