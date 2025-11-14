export const dimensions = [
  {
    id: "dimensions",
    name: "Dimensions",
    validTypes: ["number"],
    required: true,
    multiple: true,
    minValues: 3,
    description:
      "Represents the different attributes or variables being measured. Each dimension forms one axis of the radar chart, radiating from the center.",
  },
  {
    id: "category",
    name: "Category",
    operation: "get",
    validTypes: ["number", "string", "date"],
    required: false,
    description:
      "Represents the distinct groups or entities being compared. Each category is plotted on the radar chart across all dimensions, allowing for a visual comparison of their performance or characteristics across the specified attributes.",
  },
];
