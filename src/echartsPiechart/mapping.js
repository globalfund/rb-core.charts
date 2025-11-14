import { rollups } from "d3";
import { getDimensionAggregator } from "@rawgraphs/rawgraphs-core";

// copied from radarchart

export const mapData = function (data, mapping, dataTypes, dimensions) {
  // define aggregators
  // as we are working on a multiple dimension (bars), `getDimensionAggregator` will return an array of aggregator functions
  // the order of aggregators is the same as the value of the mapping
  const valueAggregator = getDimensionAggregator(
    "value",
    mapping,
    dataTypes,
    dimensions
  );

  // we will use rollup to populate a flat array of objects
  // that will be passed to the render
  let results = [];

  rollups(
    data,
    (v) => {
      const item = {
        name: v[0][mapping.category.value],
        value: mapping.value.value
          ? valueAggregator(v.map((d) => d[mapping.value.value]))
          : v.length,
      };
      results.push(item);
    },
    (d) => d[mapping.category.value]
  );

  return results;
};
