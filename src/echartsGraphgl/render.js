import * as echarts from "echarts/core";
import { GraphGLChart } from "echarts-gl/charts";
import { SVGRenderer } from "echarts/renderers";
import { TooltipComponent } from "echarts/components";

echarts.use([TooltipComponent, GraphGLChart, SVGRenderer]);

function uniq(value, index, self) {
  return self.indexOf(value) === index;
}

export function render(
  node,
  data,
  visualOptions,
  mapping,
  originalData,
  styles
) {
  const {
    // artboard
    width,
    height,
    showLegend,
    // margins
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    // chart options
    opacity,
    // palette
    palette,
  } = visualOptions;

  const chart = echarts.init(node, null, {
    // ssr: true,
    renderer: "svg",
    width: visualOptions.width,
    height: visualOptions.height,
  });

  const maxValue = data.nodes?.reduce((prev, curr) => {
    return Math.max(prev, curr.value);
  }, 0);

  data.nodes?.forEach(function (node) {
    node.symbolSize = (node.value / maxValue) * 10; // making the symbol size relative to the max value but max at 10
  });

  const nodes = data.nodes.filter(uniq);

  const option = {
    color: checkLists.find((item) => item.label === palette)?.value,
    series: [
      {
        width,
        height,
        top: marginTop,
        left: marginLeft,
        right: marginRight,
        bottom: marginBottom,
        type: "graphGL",
        nodes: nodes,
        edges: data.links,
        categories: data.categories,
        lineStyle: {
          color: "rgba(0,0,0,0.2)",
        },
        itemStyle: {
          opacity: opacity,
        },
        forceAtlas2: {
          steps: 1,
          stopThreshold: 1,
          jitterTolerence: 10,
          edgeWeight: [0.2, 1],
          gravity: 0,
          edgeWeightInfluence: 1,
          scaling: 0.2,
        },
      },
    ],
  };
  chart.setOption(option);
  // node.innerHTML = chart.renderToSVGString()
}
