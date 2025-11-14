export const dimensions = [
  {
    id: "hierarchy",
    name: "Hierarchy",
    validTypes: ["number", "date", "string"],
    required: true,
    multiple: true,
    description:
      "Shows the nested structure of categories and how groups relate. This hierarchy defines the arrangement of circles in the chart.",
  },
  {
    id: "size",
    name: "Size",
    validTypes: ["number"],
    required: false,
    aggregation: true,
    aggregationDefault: "sum",
    description:
      "Quantitative value for each category. Circle size reflects value, with larger circles indicating greater quantities.",
  },
];
