import * as echarts from "echarts/core";
import { GraphChart } from "echarts/charts";
import { SVGRenderer } from "echarts/renderers";
import { TooltipComponent } from "echarts/components";

echarts.use([TooltipComponent, GraphChart, SVGRenderer]);

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
    background,
    // margins
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    // chart options
    nodesWidth,
    nodesPadding,
    linksOpacity,
    nodeAlign,
    orient,
    // Labels
    showLabels,
    labelPosition,
    labelRotation,
    labelFontSize,
  } = visualOptions;

  const chart = echarts.init(node, null, {
    // ssr: true,
    renderer: "svg",
    width: visualOptions.width,
    height: visualOptions.height,
  });

  const nodes = data.nodes.filter(uniq);

  const option = {
    legend: [
      {
        data: data.categories?.map(function (a) {
          return a.name;
        }),
      },
    ],
    series: [
      {
        type: "graph",
        layout: "force",
        data: nodes,
        links: data.links,
        categories: data.categories,
        top: marginTop,
        left: marginLeft,
        right: marginRight,
        bottom: marginBottom,
        width,
        height,
        roam: true,
        label: {
          position: "right",
        },
        force: {
          repulsion: 100,
        },
      },
    ],
  };
  chart.setOption(option);
  // node.innerHTML = chart.renderToSVGString()
}
