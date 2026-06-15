import * as d3 from "d3";
import { getDimensionAggregator } from "@rawgraphs/rawgraphs-core";

export const mapData = function (data, mapping, dataTypes, dimensions) {
  // define aggregators
  const sizeAggregator = getDimensionAggregator(
    "size",
    mapping,
    dataTypes,
    dimensions,
  );

  // add the non-compulsory dimensions.
  "size" in mapping ? null : (mapping.size = { value: undefined });
  "breakdown" in mapping ? null : (mapping.breakdown = { value: undefined });

  let results = [];

  const xAxisValues = [
    ...new Set(data.map((d) => d[mapping.bars.value].toString())),
  ];

  const breakDownGroups = d3.rollup(
    data,
    (v) => v.reduce((acc, curr) => acc + (curr[mapping.size.value] || 1), 0),
    (d) => d[mapping.breakdown.value]?.toString(), // stacks grouping. toString() to enable grouping on dates
    (d) => d[mapping.bars.value].toString(),
  );

  breakDownGroups.forEach((value, key) => {
    results.push({
      name: key ?? "All",
      values: xAxisValues.map((bar) => value.get(bar) || 0),
    });
  });

  return {
    xAxisValues: xAxisValues,
    series: results,
  };
};
