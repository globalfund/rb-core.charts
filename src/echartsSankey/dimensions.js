export const dimensions = [
  {
    id: "steps",
    name: "Steps",
    validTypes: ["number", "date", "string"],
    required: true,
    multiple: true,
    minValues: 2,
    description:
      "The steps are the nodes in the Sankey diagram, representing the flow of data between different categories or stages. The first step is the source and the last step is the target of the flow.",
  },
  {
    id: "size",
    name: "Size",
    validTypes: ["number"],
    required: true,
    aggregation: true,
    aggregationDefault: "sum",
    description:
      "The size of the flow between steps, representing the quantity or value of the data being transferred.",
  },
];
