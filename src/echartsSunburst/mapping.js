import { rollups, stratify } from "d3";
import { getDimensionAggregator } from "@rawgraphs/rawgraphs-core";

function getFormattedItemData(d, depth, maxDepth) {
  const itemChildren = d.children
    ? (d.children || []).map((c) => {
        return getFormattedItemData(c, depth + 1, maxDepth);
      })
    : undefined;
  const item = {
    name: d.data.name,
    value: d.value,
    path: d.data.id,
    children: itemChildren,
  };
  return item;
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

  const results = [{ id: "head" }];

  const arrangeForStratify = (data, values, parent) => {
    const newValues = [...values];

    if (values.length > 0) {
      const value = newValues.shift();

      rollups(
        data,
        (v) => {
          const id = `${parent}${"/"}${v[0][value]}`;
          const item = {
            size: mapping.size.value
              ? sizeAggregator(v.map((d) => d[mapping.size.value]))
              : v.length,
            id: id,
            name: v[0][value],
            parentId: parent,
            leaf: newValues.length === 0,
          };
          arrangeForStratify(v, newValues, id);

          results.push(item);
          return item;
        },
        (d) => d[value]
      );
    }
  };
  arrangeForStratify(data, mapping.hierarchy.value, "head");

  const hierarchy = stratify()(results).sum((d) => (d.leaf ? d.size : 0));

  const formattedData = hierarchy.children.map((d) =>
    getFormattedItemData(d, 0, mapping.hierarchy.value.length)
  );

  return formattedData;
};
