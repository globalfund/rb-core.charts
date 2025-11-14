import { rollups } from "d3";
import { getDimensionAggregator } from "@rawgraphs/rawgraphs-core";

export const mapData = function (data, mapping, dataTypes, dimensions) {
  // define aggregators
  const sizeAggregator = getDimensionAggregator(
    "size",
    mapping,
    dataTypes,
    dimensions
  );
  // add the non-compulsory dimensions.
  "size" in mapping ? null : (mapping.size = { value: undefined });

  let results = [];

  data.forEach((d) => {
    const item = {
      x: d[mapping.x.value],
      y: d[mapping.y.value],
      size: mapping.size.value ? d[mapping.size.value] : data.length,
    };

    results.push(item);
  });

  rollups(
    data,
    (v) => {
      const item = {
        x: v[0][mapping.x.value], // get the first one since it's grouped
        y: v[0][mapping.y.value], // get the first one since it's grouped
        size: mapping.size.value
          ? sizeAggregator(v.map((d) => d[mapping.size.value]))
          : v.length, // aggregate. If not mapped, give 1 as size
      };
      results.push(item);
      return item;
    },
    (d) => d[mapping.x.value].toString(), // x grouping. toString() to enable grouping on dates
    (d) => d[mapping.y.value].toString() // y grouping. toString() to enable grouping on dates
  );

  return results;
};
