import { rollups } from "d3";

export const mapData = function (data, mapping, dataTypes, dimensions) {
  const links = [];
  const nodes = [];
  const categories = [];
  "categories" in mapping ? null : (mapping.categories = { value: undefined });
  "nodeSize" in mapping ? null : (mapping.nodeSize = { value: undefined });

  rollups(
    data,
    (v) => {
      const category = mapping.categories.value
        ? v[0][mapping.categories.value]
        : undefined;

      v.forEach((d) => {
        const node = {
          id: d[mapping.node.value],
          name: d[mapping.node.value],
          value: d[mapping.nodeSize.value],
          category,
          data: d,
        };
        nodes.push(node);
      });
      if (category) {
        categories.push({ name: category });
      }
    },
    (d) => (mapping.categories?.value ? d[mapping.categories.value] : undefined)
  );

  mapping.link.value.forEach((link) => {
    rollups(
      nodes,
      (v) => {
        if (v.length > 1) {
          const representative = v[0];
          for (let i = 1; i < v.length; i++) {
            links.push({ source: representative.id, target: v[i].id });
          }
        }
      },
      (d) => d.data[link]
    );
  });

  return { links, categories, nodes };
};
