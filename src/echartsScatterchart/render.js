import * as echarts from "echarts/core";
import { ScatterChart } from "echarts/charts";
import { SVGRenderer } from "echarts/renderers";
import { GridComponent, LegendComponent } from "echarts/components";

echarts.use([GridComponent, LegendComponent, ScatterChart, SVGRenderer]);

export function render(
  node,
  data,
  visualOptions,
  mapping,
  originalData,
  styles
) {
  const {
    // margin
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    // Tooltip
    showTooltip,
    isMonetaryValue,
  } = visualOptions;

  const chart = echarts.init(node, null, {
    renderer: "svg",
    width,
    height,
  });

  const option = {
    grid: {
      top: marginTop,
      left: marginLeft,
      right: marginRight,
      bottom: marginBottom,
      zlevel: -1,
      z: -1,
    },
    xAxis: {},
    yAxis: {},

    tooltip: {
      trigger: showTooltip ? "item" : "none",
      valueFormatter: (value) =>
        isMonetaryValue
          ? formatFinancialValue(parseInt(value.toString(), 10), true)
          : value,
    },
    series: [
      {
        symbolSize: 5,
        data: data.map((d) => [d.x, d.y]),
        type: "scatter",
      },
    ],
  };
  chart.setOption(option);
}
