import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import { SVGRenderer } from "echarts/renderers";
import { GridComponent } from "echarts/components";

echarts.use([GridComponent, BarChart, SVGRenderer]);

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
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    realTimeSort,
    barRadius,
    barWidth,
    legend,
    showTooltip,
    isMonetaryValue,
    label,
    labelFontSize,
    dataZoom,
    palette,
  } = visualOptions;

  const option = {
    color: checkLists.find((item) => item.label === palette)?.value,
    grid: {
      top: marginTop,
      left: marginLeft,
      right: marginRight,
      bottom: marginBottom,
      containLabel: true,
    },
    tooltip: {
      trigger: showTooltip ? "item" : "none",
      confine: true,
      formatter: (params) => {
        return `${params.name}: ${params.seriesName} - ${
          isMonetaryValue
            ? formatFinancialValue(params.value, true)
            : params.value
        }`;
      },
    },
    legend: {
      show: legend,
      data: data.series.map((d) => d.name),
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
    xAxis: [
      {
        type: "category",
        axisTick: { show: false },
        data: data.xAxisValues,
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: data.series.map((d) => ({
      name: d.name,
      type: "bar",
      stack: "total",
      realtimeSort: realTimeSort ?? true,
      itemStyle: {
        borderRadius: barRadius,
      },
      label: {
        show: label,
        rotate: 90,
        formatter: (params) => {
          return `${
            isMonetaryValue
              ? formatFinancialValue(params.value, true)
              : params.value
          }`;
        },
        fontSize: labelFontSize,
        rich: {
          name: {},
        },
      },
      emphasis: {
        focus: "series",
      },
      data: data.xAxisValues.map((x) => d.values[x] || 0),
      barWidth,
    })),
  };

  chart.setOption(option);
}
