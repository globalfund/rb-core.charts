import * as echarts from "echarts/core";
import { HeatmapChart } from "echarts/charts";
import { SVGRenderer } from "echarts/renderers";
import { GridComponent, LegendComponent } from "echarts/components";

echarts.use([GridComponent, LegendComponent, HeatmapChart, SVGRenderer]);

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
    // Label
    showLabels,
    labelFontSize,
    // Palette
    palette,
    gaussian,
  } = visualOptions;

  let gridSize = [100, 100]; // Adjust the size of the grid as needed
  let amplitude = 500; // Adjust the amplitude for intensity scaling

  const maxX = Math.max(...data.map((data) => data.x));
  const maxY = Math.max(...data.map((data) => data.y));

  const seriesData = data.map((d) => [d.x, d.y, d.size]);

  const normalData = data.map((d) => [
    (d.x / maxX) * gridSize[1],
    (d.y / maxY) * gridSize[0],
    d.size,
  ]);

  function generateGaussianHeatmapData(data, gridSize, amplitude) {
    let gaussianData = [];
    for (let x = 0; x < gridSize[0]; x++) {
      for (let y = 0; y < gridSize[1]; y++) {
        let intensity = 0;
        data.forEach(function (point) {
          let dx = x - point[0];
          let dy = y - point[1];
          let distanceSquared = dx * dx + dy * dy;
          intensity += point[2] * Math.exp(-distanceSquared / amplitude);
        });
        gaussianData.push([x, y, intensity]);
      }
    }
    return gaussianData;
  }

  let outputData = [];

  if (gaussian) {
    outputData = generateGaussianHeatmapData(seriesData, gridSize, amplitude);
  } else {
    outputData = normalData;
  }

  const option = {
    grid: {
      top: marginTop,
      left: marginLeft,
      right: marginRight,
      bottom: marginBottom,
    },
    xAxis: {
      type: "category",
      data: Array.from({ length: gridSize[0] }, (_, index) => index),
    },
    yAxis: {
      type: "category",
      data: Array.from({ length: gridSize[1] }, (_, index) => index),
    },
    tooltip: {
      trigger: showTooltip ? "item" : "none",
      confine: true,
      valueFormatter: (value) =>
        isMonetaryValue
          ? formatFinancialValue(parseInt(value.toString(), 10), true)
          : value,
    },
    visualMap: {
      min: Math.min(...outputData.map((item) => (item[2] ? item[2] : 0))),
      max: Math.max(...outputData.map((item) => (item[2] ? item[2] : 0))),
      calculable: true,
      realtime: false,
      inRange: {
        color: checkLists.find((item) => item.label === palette)?.value,
      },
      show: false,
    },
    series: [
      {
        type: "heatmap",
        data: outputData,
        emphasis: {
          itemStyle: {
            borderColor: "#333",
            borderWidth: 1,
          },
        },
        progressive: 1000,
        animation: false,
      },
    ],
  };
  chart.setOption(option);
}
