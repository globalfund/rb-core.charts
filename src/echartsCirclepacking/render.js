import { pack } from "d3";
import * as echarts from "echarts/core";
import { CustomChart } from "echarts/charts";
import { SVGRenderer } from "echarts/renderers";
import { GridComponent } from "echarts/components";

echarts.use([GridComponent, CustomChart, SVGRenderer]);

function convertData(root) {
  return root.descendants().map((node) => ({
    data: node.data,
    r: node.r,
    x: node.x,
    y: node.y,
    depth: node.depth,
    value: node.data.value,
    name: node.data.name,
    path: node.data.path,
    isLeaf: !node.children || !node.children.length,
  }));
}

function getOptionForCirclepacking(data) {
  let maxDepth = 0;

  data.forEach((item) => {
    maxDepth = Math.max(item?.depth, maxDepth);
  });

  console.log(maxDepth);

  const renderItem = (params, api) => {
    const dataItem = data[params.dataIndex];

    let nodePath = dataItem.path;

    if (!nodePath) {
      // Reder nothing.
      return;
    }
    let isLeaf = dataItem.isLeaf;
    let nodeName = isLeaf ? dataItem.name : "";
    let z2 = dataItem.depth * 2;
    return {
      type: "circle",
      shape: {
        cx: dataItem.x,
        cy: dataItem.y,
        r: dataItem.r,
      },
      transition: ["shape"],
      z2: z2,
      textContent: {
        type: "text",
        style: {
          text: nodeName,
          fontFamily: "Arial",
          width: dataItem.r * 1.3,
          overflow: "break",
          fontSize: dataItem.r / 4,
        },
        emphasis: {
          style: {
            overflow: "break",
            fontSize: Math.max(dataItem.r / 3, 12),
          },
        },
      },
      textConfig: {
        position: "inside",
      },
      style: {
        fill: interpolateColor(
          "#006edd",
          "#e0ffff",
          0,
          maxDepth,
          dataItem.depth
        ),
      },
      emphasis: {
        style: {
          fontFamily: "Arial",
          fontSize: 12,
          shadowBlur: 20,
          shadowOffsetX: 3,
          shadowOffsetY: 5,
          shadowColor: "rgba(0,0,0,0.3)",
        },
      },
    };
  };

  const option = {
    dataset: {
      source: data,
    },
    tooltip: {},
    visualMap: {
      show: false,
      type: "continuous",
      min: 1,
      max: maxDepth,
      calculable: true,
      dimension: 1,
      inRange: {
        color: ["#006edd", "#e0ffff"],
      },
    },

    hoverLayerThreshold: Infinity,
    series: {
      type: "custom",
      renderItem: renderItem,
      progressive: 0,
      coordinateSystem: "none",
      encode: {
        tooltip: "value",
        itemName: "name",
      },
      data: data,
    },
  };
  return option;
}

const interpolateColor = (color1, color2, min, max, value) => {
  // Example usage

  const dimensionValue = value;

  // Calculate the factor for interpolation
  const factor = (dimensionValue - min) / (max - min);
  // Parse the color values
  const c1 = color1.match(/[A-Za-z0-9]{2}/g)?.map((v) => parseInt(v, 16));
  const c2 = color2.match(/[A-Za-z0-9]{2}/g)?.map((v) => parseInt(v, 16));
  if (c1 && c2) {
    const interpolatedColor = c1.map((component, index) =>
      Math.round(component + factor * (c2[index] - component))
    );
    const resultColor =
      "#" +
      interpolatedColor?.map((v) => v.toString(16).padStart(2, "0")).join("");
    return resultColor;
  }
};

const stratify = (dataset) => {
  return d3
    .stratify()
    .id((d) => d.path)
    .parentId((d) => d.parentPath)(dataset)
    .sum((d) => d.value || 0)
    .sort((a, b) => {
      if (b.value && a.value) {
        return b.value - a.value;
      }
      return 0;
    });
};

export const drillDown = (
  // To change the head to the node with the select path
  dataset,
  targetId,
  visualOptions
) => {
  if (dataset.length === 0) {
    return {};
  }
  let root = stratify(dataset);

  const {
    // artboard
    width,
    height,
    // margin
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  } = visualOptions;

  const margin = {
    top: marginTop,
    right: marginRight,
    bottom: marginBottom,
    left: marginLeft,
  };

  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  if (targetId !== null) {
    let y = root.descendants().find((node) => {
      return node.data.path === targetId;
    });
    if (y) {
      root = y;
    }
  }

  root.parent = null;
  // Reset

  pack().size([chartWidth, chartHeight]).padding(3)(root);
  const option = getOptionForCirclepacking(convertData(root));

  return option;
};

export function render(
  node,
  data,
  visualOptions,
  mapping,
  originalData,
  styles
) {
  const chart = echarts.init(node, null, {
    renderer: "svg",
    width,
    height,
  });

  const option = drillDown(data, null, visualOptions);

  chart.setOption(option);

  chart.on("click", { seriesIndex: 0 }, (params) => {
    chart.setOption(drillDown(data, params.data.path, visualOptions));
  });

  // Reset: click on the blank area.
  chart.getZr().on("click", function (event) {
    if (!event.target) {
      chart.setOption(drillDown(data, null, visualOptions));
    }
  });
}
