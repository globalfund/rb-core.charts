import { rollups } from "d3";

export const mapData = function (data, mapping, dataTypes, dimensions) {
  // add the non-compulsory dimensions.
  "category" in mapping ? null : (mapping.category = { value: undefined });

  let indicatorDict = {};
  mapping.dimensions.value.map((axisName) => {
    indicatorDict[axisName] = 0;
  });

  let results = [];

  let categories = [];

  rollups(
    data,
    (v) => {
      const category = mapping.category.value
        ? v[0][mapping.category.value]
        : "All"; // Getting the first one since it's grouped
      categories.push(category);

      let item = {
        value: mapping.dimensions.value.map((axisName) => {
          const sum = v.reduce((acc, d) => acc + d[axisName], 0);
          indicatorDict[axisName] = Math.max(indicatorDict[axisName], sum);
          return sum;
        }),
        name: category,
      };
      results.push(item);

      return "done";
    },
    (d) =>
      mapping.category.value
        ? d[mapping.category.value]?.toString()
        : undefined, // category grouping. toString() to enable grouping on dates
  );

  const indicators = Object.keys(indicatorDict).map((i) => ({
    text: i,
    max: indicatorDict[i] + indicatorDict[i] * 0.2,
  }));

  return { data: results, indicators, categories };
};
