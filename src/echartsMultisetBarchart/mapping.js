import { rollups } from "d3";
import { getDimensionAggregator } from "@rawgraphs/rawgraphs-core";

export const mapData = function (data, mapping, dataTypes, dimensions) {
  // as we are working on a multiple dimension (bars), `getDimensionAggregator` will return an array of aggregator functions
  // the order of aggregators is the same as the value of the mapping
  const sizesAggregators = getDimensionAggregator(
    "sizes",
    mapping,
    dataTypes,
    dimensions
  );

  let results = [];
  const result = rollups(
    data,
    (v) => {
      // for every dimension in the bars field, create an item
      mapping.sizes.value.forEach((sizeName, i) => {
        //getting values for aggregation
        const valuesForSize = v.map((x) => x[sizeName]);
        //getting i-th aggregator
        const aggregator = sizesAggregators[i];

        // create the item
        const item = {
          bars: v[0][mapping.bars.value], // get the first one since it's grouped
          sizes: sizeName,
          size: aggregator(valuesForSize),
        };
        results.push(item);
      });
    },
    (d) => d[mapping.bars.value].toString() // stacks grouping. toString() to enable grouping on dates
  );

  const nestedData = [];
  // create nest structure
  rollups(
    results,
    (v) => {
      let valuesObj = {};
      v.forEach((d) => {
        valuesObj[d.bars] = d.size;
      });
      const item = {
        name: v[0].sizes,
        values: valuesObj,
      };
      nestedData.push(item);
    },
    (d) => d.sizes
  );
  return {
    xAxisValues: result.map((m) => m[0]),
    series: nestedData,
  };
};
