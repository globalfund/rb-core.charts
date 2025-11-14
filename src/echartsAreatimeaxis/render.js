import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import { SVGRenderer } from "echarts/renderers";
import {
  GridComponent,
  LegendComponent,
  DataZoomComponent,
} from "echarts/components";

echarts.use([
  GridComponent,
  LegendComponent,
  LineChart,
  DataZoomComponent,
  SVGRenderer,
]);

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
  const {
    // artboard
    // margins
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    // Tooltip
    showTooltip,
    isMonetaryValue,
    dataZoom,
  } = visualOptions;

  const convertedData = data.map((d) => [+new Date(d.x), d.y]);

  const option = {
    grid: {
      top: marginTop,
      left: marginLeft,
      right: marginRight,
      bottom: marginBottom,
      zlevel: -1,
      z: -1,
    },
    tooltip: {
      trigger: showTooltip ? "item" : "none",
      position: function (pt) {
        return [pt[0], "10%"];
      },
      valueFormatter: (value) =>
        isMonetaryValue
          ? formatFinancialValue(parseInt(value.toString(), 10), true)
          : value,
    },
    xAxis: {
      type: "time",
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
    },
    dataZoom: dataZoom
      ? [
          {
            type: "inside",
            start: 0,
            end: 20,
          },
          {
            start: 0,
            end: 20,
          },
        ]
      : null,
    series: [
      {
        type: "line",
        smooth: true,
        symbol: "none",
        areaStyle: {},
        data: convertedData,
      },
    ],
  };

  chart.setOption(option);
}
