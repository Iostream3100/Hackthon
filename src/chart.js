import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
} from "echarts/components";
import { MapChart, ScatterChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import csdJson from "./csd.json";
import { rateIndex, communitiesCoords } from "./data";

echarts.use([
  MapChart,
  ScatterChart,
  TitleComponent,
  TooltipComponent,
  GeoComponent,
  VisualMapComponent,
  CanvasRenderer,
]);
echarts.registerMap("csd", csdJson);

const Chart = (props) => {
  const communities = communitiesCoords.map(({ name, lat, lon }) => ({
    name,
    value: [lon, lat, 1],
  }));
  const filter_communities = communities.filter(obj => obj.name.toLowerCase().includes(props.keyword.toString().toLowerCase())).map(obj => ({"name":obj.name,"value":obj.value,"visualMap":false}));
  console.log(filter_communities);
  const options = {
    title:{
      text: 'BC Community Food Insecurity Estimates',
      subtext: 'Support for United Way Funding Assessment',
      left: 'right'
    },

    tooltip: {
      trigger: "item",
    },
    geo: {
      roam: true,
      map: "csd",
      zoom: 1.5,
    },
    visualMap: {
      left: "right",
      min: 0,
      max: 10,
      inRange: {
        // prettier-ignore
        // color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'],
        color:[
          '#fff','#F7FBFF',
        '#E0F3DB',
        '#CCEBC5',
        '#A8DDB5',
        '#7BCCC4',
        '#4EB3D3',
        '#2B8CBE',
        '#0868AC',
        '#084081',

      ]
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
          zoom: 2,
          universalTransition: true,
          data: props.division?rateIndex:"",
          geoIndex: 0,
        },
      {
        name: "BC communities",
        type: "scatter",
        coordinateSystem: "geo",
        geoIndex: 0,
        data: props.community?filter_communities:"",
        symbolSize: 7,
        itemStyle: {
          color: "#f46d43",
          opacity: 0.7,
          borderColor: '#000' ,
          borderWidth: 1 ,
          borderType: 'solid' 
        },
        
        encode: {
          value: 2,
        },
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
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default Chart;
