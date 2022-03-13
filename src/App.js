import React, { Component } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
} from "echarts/components";
import { MapChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import csdJson from "./csd.json";
import "./App.css";

const data = [];
const options = {
  series: [
    {
      id: "population",
      type: "map",
      roam: true,
      map: "csd",
      projection: {
        project: (point) => [
          (point[0] / 180) * Math.PI,
          -Math.log(Math.tan((Math.PI / 2 + (point[1] / 180) * Math.PI) / 2)),
        ],
        unproject: (point) => [
          (point[0] * 180) / Math.PI,
          ((2 * 180) / Math.PI) * Math.atan(Math.exp(point[1])) - 90,
        ],
      },
      universalTransition: true,
      data: data,
    },
  ],
};

echarts.use([
  MapChart,
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
  CanvasRenderer,
]);
echarts.registerMap("csd", csdJson);

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactEChartsCore
          echarts={echarts}
          option={options}
          notMerge={true}
          lazyUpdate={true}
          theme={"theme_name"}
        />
      </div>
    );
  }
}

export default App;
