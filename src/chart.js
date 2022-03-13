import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { TitleComponent, TooltipComponent, VisualMapComponent } from "echarts/components";
import { MapChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import csdJson from './csd.json'
import {rateIndex} from './data'

echarts.use([MapChart, TitleComponent, TooltipComponent,VisualMapComponent, CanvasRenderer]);
echarts.registerMap("csd", csdJson);

const Chart = () => {
    const options = {
      tooltip: {
        trigger: "item",
      },
      visualMap: {
        left: "right",
        min: 0,
        max: 10,
        inRange: {
          // prettier-ignore
          color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'],
        },
        text: ["High", "Low"],
        calculable: true,
      },
      series: [
        {
          id: "population",
          type: "map",
          roam: true,
          map: "csd",
          zoom: 2,
          universalTransition: true,
          data: rateIndex,
        },
      ],
    };

    return (
      <div>
          {/* {console.log(data)} */}
          {/* {console.log(csdJson)} */}
        <ReactEChartsCore
          echarts={echarts}
          option={options}
          notMerge={true}
          lazyUpdate={true}
          style={{ height: "1000px" }}
        />
      </div>
    );
};

export default Chart