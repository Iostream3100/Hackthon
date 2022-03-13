import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { TitleComponent, TooltipComponent, VisualMapComponent, GeoComponent } from "echarts/components";
import { MapChart, ScatterChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import csdJson from './csd.json'
import {rateIndex, communitiesCoords} from './data'

echarts.use([
  MapChart,
  ScatterChart,
  TitleComponent,
  TooltipComponent,
  GeoComponent, VisualMapComponent,
  CanvasRenderer,
]);
echarts.registerMap("csd", csdJson);

const Chart = () => {
    const communities = communitiesCoords.map(({ name, lat, lon }) => ({
      name,
      value: [lon, lat, 1],
    }));
    const options = {
      tooltip: {
        trigger: "item",
      },
      geo: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        roam: true,
        map: "csd",
        // center: [-124.82014628299999, 53.37684411100008],
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
          id: "rateIndex",
          name: "Calculated Food Insecurity Index",
          type: "map",
          roam: true,
          map: "csd",
          zoom: 2,
          universalTransition: true,
          data: rateIndex,
        },
        {
          name: "BC communities",
          type: "scatter",
          coordinateSystem: "geo",
          data: communities,
          symbolSize: 20,
          itemStyle: {
            color: "#ddb926",
            opacity: 0.7
          },
          encode: {
              value: 2
          }
        },
      ],
    };

    return (
      <div>
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