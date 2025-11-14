export const mapData = function (data, mapping, dataTypes, dimensions) {
  let results = [];

  data.forEach((d) => {
    const item = {
      x: d[mapping.x.value],
      y: d[mapping.y.value],
    };
    results.push(item);
  });
  return results;
};
