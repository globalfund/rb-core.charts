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

  rollups(
    data,
    (v) => {
      const item = {
        x: v[0][mapping.x.value], //get the first one since it's grouped
        y: yAggregator(v.map((d) => d[mapping.y.value])), // aggregate
      };
      results.push(item);
    },
    (d) => d[mapping.x.value].toString() // sub-group functions. toString() to enable grouping on dates
  );

  return results;
};
