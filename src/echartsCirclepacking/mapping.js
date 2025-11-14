import { rollups, rollup } from "d3";
import { getDimensionAggregator } from "@rawgraphs/rawgraphs-core";

const newResults = [
  {
    name: "Head",
    value: 0,
    path: "head",
    parentPath: "",
  },
]; // initializing with head for stratify to work

function formatItemData(d, depth, maxDepth, path) {
  const itemPath = `${path}${path.length > 0 ? "/" : ""}${d.data[0]}`;
  d.children
    ? (d.children || []).map((c) => {
        formatItemData(c, depth + 1, maxDepth, itemPath);
      })
    : undefined;
  const item = {
    name: d.data[0],
    value: d.value,
    path: itemPath,
    parentPath: path,
  };
  newResults.push(item);
}

export const mapData = function (data, mapping, dataTypes, dimensions) {
  const sizeAggregator = getDimensionAggregator(
    "size",
    mapping,
    dataTypes,
    dimensions
  );

  // add the non-compulsory dimensions.
  "size" in mapping ? null : (mapping.size = { value: undefined });

  const results = [];

  rollups(
    data,
    (v) => {
      const item = {
        hierarchy: new Map(mapping.hierarchy.value.map((d) => [d, v[0][d]])), //get the first one since it's grouped
        size: mapping.size.value
          ? sizeAggregator(v.map((d) => d[mapping.size.value]))
          : v.length,
      };

      results.push(item);
      return item;
    },
    ...mapping.hierarchy.value.map((level) => (d) => d[level]) // create a grouping for each level of the hierarchy
  );

  const nest = rollup(
    results,
    (v) => v[0],
    ...mapping.hierarchy.value.map((level) => (d) => d.hierarchy.get(level))
  );

  const hierarchy = d3
    .hierarchy(nest)
    .sum((d) => (d[1] instanceof Map ? 0 : d[1].size)); // since maps have a .size porperty in native javascript, sum only values for leaves, and not for Maps

  hierarchy.children.map((d) =>
    formatItemData(d, 0, mapping.hierarchy.value.length, "head")
  );

  return newResults;
};
