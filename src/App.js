import React, { Component } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
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
      zoom: 2,
      universalTransition: true,
      data: data,
    },
  ],
};

echarts.use([
  MapChart,
  TitleComponent,
  TooltipComponent,
  CanvasRenderer,
]);
echarts.registerMap("csd", csdJson);

class App extends Component {
  render() {
    return (
      <div>
        <ReactEChartsCore
          echarts={echarts}
          option={options}
          notMerge={true}
          lazyUpdate={true}
          style={{height:"1100px"}}
        />
      </div>
    );
  }
}

export default App;
