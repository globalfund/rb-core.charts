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
  opacity: {
    type: "number",
    label: "Opacity (0-1)",
    default: 1,
    step: 0.1,
    min: 0,
    max: 1,
    group: "chart",
  },
  palette: {
    type: "radioGroup",
    label: "Dataxplorer",
    group: "Color palette",
    default: "Dataxplorer",
  },
};
