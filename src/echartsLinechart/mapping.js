import { rollups } from "d3";
import { getDimensionAggregator } from "@rawgraphs/rawgraphs-core";

export const mapData = function (data, mapping, dataTypes, dimensions) {
  const yAggregator = getDimensionAggregator(
    "y",
    mapping,
    dataTypes,
    dimensions
  );

  let results = [];

  // Group data by x-axis values and process each group
  const groupedData = rollups(
    data,
    (v) => {
      // For each y-dimension, create an aggregated item
      mapping.y.value.forEach((yName, i) => {
        const valuesForY = v.map((x) => x[yName]);
        const aggregator = yAggregator[i];

        const item = {
          x: v[0][mapping.x.value], // x-axis value (same for all in group)
          y: yName, // y-series name
          yValue: aggregator(valuesForY), // aggregated value
        };
        results.push(item);
      });
      return v; // Return the group for potential future use
    },
    (d) => d[mapping.x.value].toString() // Group by x-axis value
  );

  // Create nested structure for series
  const nestedData = [];
  rollups(
    results,
    (v) => {
      // Create values object with x-axis values as keys
      let valuesObj = {};
      v.forEach((d) => {
        valuesObj[d.x] = d.yValue;
      });

      const item = {
        name: v[0].y, // Series name
        values: valuesObj, // Object with x-axis values as keys
      };
      nestedData.push(item);
    },
    (d) => d.y // Group by y-series name
  );

  return {
    xAxisValues: groupedData.map((m) => m[0]), // Extract x-axis values
    series: nestedData,
  };
};
