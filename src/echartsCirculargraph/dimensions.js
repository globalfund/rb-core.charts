export const dimensions = [
  {
    id: "node",
    name: "Node",
    validTypes: ["number", "date", "string"],
    required: true,
    description: "Represents entities in the network. Each node is a vertex.",
  },

  {
    id: "link",
    name: "Links",
    validTypes: ["number", "date", "string"],
    required: true,
    multiple: true,
    minValues: 1,
    description: "Shows connections between nodes and how they interconnect.",
  },
  {
    id: "nodeSize",
    name: "Node Size",
    validTypes: ["number"],
    required: false,
    description:
      "Indicates the value of each node. Node size shows its significance in the network.",
  },
  {
    id: "categories",
    name: "Categories",
    validTypes: ["number", "date", "string"],
    required: false,
    description:
      "Represents classifications of nodes. Categories help differentiate nodes visually and provide context to their relationships.",
  },
];
