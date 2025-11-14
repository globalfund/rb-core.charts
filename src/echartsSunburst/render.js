import * as echarts from "echarts/core";
import { SunburstChart } from "echarts/charts";
import { SVGRenderer } from "echarts/renderers";
import { GridComponent } from "echarts/components";

echarts.use([GridComponent, SunburstChart, SVGRenderer]);

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
    // labels
    showLabels,
    labelFontSize,
    showBreadcrumbs,
    // chart options
    // orientation,
  } = visualOptions;

  const chart = echarts.init(node, null, {
    renderer: "svg",
    width,
    height,
  });

  const option = {
    // backgroundColor: background,
    backgroundColor: "transparent",
    series: [
      {
        name: "All",
        type: "sunburst",
        data,
        radius: [0, "95%"],
        sort: undefined,
        emphasis: {
          focus: "ancestor",
        },
        levels: [
          {},
          {
            r0: "15%",
            r: "35%",
            itemStyle: {
              borderWidth: 2,
            },
            label: {
              rotate: "tangential",
            },
          },
          {
            r0: "35%",
            r: "70%",
            label: {
              align: "right",
            },
          },
          {
            r0: "70%",
            r: "72%",
            label: {
              position: "outside",
              padding: 3,
              silent: false,
            },
            itemStyle: {
              borderWidth: 3,
            },
          },
        ],
        width,
        height,
        roam: false,
        top: marginTop,
        left: marginLeft,
        right: marginRight,
        bottom: marginBottom,
        leafDepth: 1,
        label: {
          show: showLabels,
          fontSize: labelFontSize,
        },
        breadcrumb: {
          show: showBreadcrumbs,
          top: 0,
          bottom: "auto",
        },
      },
    ],
  };

  chart.setOption(option);
}
