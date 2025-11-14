export const dimensions = [
  {
    id: "country",
    name: "Country",
    validTypes: ["string"],
    required: true,
    operation: "get",
    description:
      "Geographic location defines where data is on a map, using latitude and longitude or a specific region.",
  },
  {
    id: "size",
    name: "Size",
    validTypes: ["number"],
    required: true,
    operation: "get",
    aggregation: true,
    aggregationDefault: "sum",
    description: "Values are actual data that need to be displayed on the map.",
  },
];
