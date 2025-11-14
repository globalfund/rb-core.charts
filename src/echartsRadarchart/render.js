import * as echarts from "echarts/core";
import { RadarChart } from "echarts/charts";
import { SVGRenderer } from "echarts/renderers";
import { GridComponent, LegendComponent } from "echarts/components";

echarts.use([GridComponent, LegendComponent, RadarChart, SVGRenderer]);

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
    // margin
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    // Tooltip
    showTooltip,
    isMonetaryValue,
    // Palette
    palette,
  } = visualOptions;

  const option = {
    grid: {
      top: marginTop,
      left: marginLeft,
      right: marginRight,
      bottom: marginBottom,
    },
    tooltip: {
      trigger: showTooltip ? "item" : "none",
      valueFormatter: (value) =>
        isMonetaryValue
          ? formatFinancialValue(parseInt(value.toString(), 10), true)
          : value,
    },
    legend: {
      type: "scroll",
      bottom: 10,
      data: data.colors.map((color) => String(color)),
    },
    visualMap: {
      top: "middle",
      right: 10,
      color: checkLists.find((item) => item.label === palette)?.value,
      show: false,
    },
    radar: {
      indicator: data.indicators,
    },
    series: data.data.map((item) => ({
      type: "radar",
      symbol: "none",
      lineStyle: {
        width: 1,
      },
      emphasis: {
        areaStyle: {
          color: "rgba(0,250,0,0.3)",
        },
      },
      data: [
        {
          value: item.value,
          name: String(item.name),
        },
      ],
    })),
  };

  chart.setOption(option);
}
