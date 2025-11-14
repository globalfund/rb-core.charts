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
    width,
    height,
    // artboard
    showLegend,
    // margin
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    // Tooltip
    showTooltip,
    isMonetaryValue,
    // Label
    showLabels,
    labelFontSize,
  } = visualOptions;

  const chart = echarts.init(node, null, {
    renderer: "svg",
    width,
    height,
  });

  const groups = Object.keys(data);

  const maxSize = Math.max(
    ...groups.map((group) =>
      data[group].reduce((prev, curr) => {
        return Math.max(prev, curr.size);
      }, 0)
    )
  );

  const option = {
    legend: {
      right: "10%",
      top: "3%",
      data: groups,
      show: showLegend,
    },
    grid: {
      top: marginTop,
      left: marginLeft,
      right: marginRight,
      bottom: marginBottom,
    },
    xAxis: {
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
      scale: true,
    },
    tooltip: {
      trigger: showTooltip ? "item" : "none",
      confine: true,
      formatter: (params) => {
        return `${params.data[3]}: ${
          isMonetaryValue
            ? formatFinancialValue(params.value, true)
            : params.data[2]
        }`;
      },
    },
    series: groups.map((group) => ({
      name: group,
      data: data[group].map((item) => [
        item.x,
        item.y,
        (item.size / maxSize) * 50, // making the symbol size relative to the max value but max at 50,
        item.label,
        item.color,
      ]),
      type: "scatter",
      symbolSize: function (singleData) {
        return singleData[2];
      },
      label: { show: showLabels, fontSize: labelFontSize },
      emphasis: {
        focus: "series",
        label: {
          show: true,
          formatter: function (param) {
            return param.data[3];
          },
          position: "top",
        },
      },
      itemStyle: {
        shadowBlur: 10,
        shadowColor: "rgba(120, 36, 50, 0.5)",
        shadowOffsetY: 5,
      },
    })),
  };

  chart.setOption(option);
}
