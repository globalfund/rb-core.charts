export const dimensions = [
  {
    id: "metric",
    name: "Metric",
    validTypes: ["number"],
    required: true,
    aggregation: true,
    aggregationDefault: "sum",
    description:
      "Represents the levels of organization or categorization. It shows how data is nested within different groups.",
  },
  {
    id: "mainKPImetric",
    name: "Main KPI Metric",
    validTypes: ["number"],
    static: true,
    description:
      "The main KPI metric must be between 0 and 6 characters in length. Main KPI metric will overwrite content from the dataset.",
  },
  {
    id: "header",
    name: "Header",
    validTypes: ["string"],
    required: false,
    static: true,
    description: "The header must be between 6 and 50 characters in length.",
  },

  {
    id: "subheader",
    name: "Sub Header",
    validTypes: ["string"],
    required: false,
    static: true,
    description: "The subheader must be between 6 and 50 characters in length.",
  },
  {
    id: "unitofmeasurement",
    name: "Unit Of Measurement",
    validTypes: ["string"],
    required: false,
    static: true,
    description: "",
  },
];
