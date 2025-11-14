# Report Builder Core Charts

This repository contains the core charts for the Report Builder application. It is a library of reusable charts built with D3.js and ECharts.

## Available Charts

The following charts are available in this library:

- Big Number
- Area Stack (ECharts)
- Area Time Axis (ECharts)
- Bar Chart (ECharts)
- Bubble Chart (ECharts)
- Circle Packing (ECharts)
- Circular Graph (ECharts)
- Force Graph (ECharts)
- Geo Map (ECharts)
- Graph GL (ECharts)
- Heatmap (ECharts)
- Line Chart (ECharts)
- Multiset Bar Chart (ECharts)
- Pie Chart (ECharts)
- Radar Chart (ECharts)
- Sankey (ECharts)
- Scatter Chart (ECharts)
- Stacked Bar Chart (ECharts)
- Sunburst (ECharts)
- Treemap (ECharts)

## Installation

To use this library in your project, you can install it via npm:

```bash
npm install rb-core.charts
```

## Usage

Here is a basic example of how to use a chart from this library:

```javascript
import { barchart } from "rb-core.charts";
import { select } from "d3-selection";

const data = [
  { label: "A", value: 10 },
  { label: "B", value: 20 },
  { label: "C", value: 15 },
];

const mapping = {
  label: "label",
  value: "value",
};

const visualOptions = {
  width: 800,
  height: 600,
};

const chart = barchart.data(data).mapping(mapping).visualOptions(visualOptions);

select("#chart-container").call(chart.render);
```

## Development

To work on this project locally, follow these steps:

1.  Clone the repository:
    ```bash
    git clone https://github.com/globalfund/rb-core.charts.git
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run sandbox
    ```
    This will start a webpack dev server with a live-reloading example page available at `http://localhost:8080`.

## Building

To build the library for production, run the following command:

```bash
npm run build
```

This will create the bundled files in the `lib` directory.

## License

This project is licensed under the Apache-2.0 License. See the [LICENSE](LICENSE) file for details.

This project was originally based on @rawgraphs/rawgraphs-charts, though the codebase has since undergone significant changes, especially in the chart modules. It continues to use @rawgraphs/rawgraphs-core and the original bundler.

See the [NOTICE](NOTICE.txt) file for attribution to the RAWGraphs project.
