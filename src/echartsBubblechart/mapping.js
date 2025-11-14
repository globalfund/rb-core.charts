import { rollups } from "d3";

export const mapData = function (data, mapping, dataTypes, dimensions) {
  // add the non-compulsory dimensions.

  "size" in mapping ? null : (mapping.size = { value: undefined });
  "label" in mapping ? null : (mapping.label = { value: undefined });

  let results = {};

  rollups(
    data,
    (v) => {
      const label = mapping.label.value ? v[0][mapping.label.value] : "All"; // Getting the first one since it's grouped
      const labelGroup = v.map((d) => ({
        x: d[mapping.x.value],
        y: d[mapping.y.value],
        size: mapping.size.value ? d[mapping.size.value] : v.length,
        label: mapping.label.value ? d[mapping.label.value] : undefined,
      }));
      results[label] = labelGroup;
      return labelGroup;
    },
    (d) =>
      mapping.label.value ? d[mapping.label.value]?.toString() : undefined // color grouping. toString() to enable grouping on dates
  );

  return results;
};
