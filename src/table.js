import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";

import React from "react";
echarts.use([BarChart]);
class Table extends React.Component {
  componentDidMount() {
    var { map, name, className, interval, title, per_Name } = this.props;

    map.sort((a, b) => {
      return a[per_Name] - b[per_Name];
    });
    console.log("XXXXXX");
    console.log(map);

    var chartDom = document.getElementById(className);
    var myChart = echarts.init(chartDom);
    var option;
    var first = true;

    option = {
      title: {
        text: title,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
      },
      yAxis: {
        type: "category",
        data: map
          //   .map((element) => element.name)
          .filter(
            (item, index) =>
              index % parseInt(interval) === 0 || item.name === name
          )
          .map((element) => element.name),
        itemStyle: {
          color: function (params) {
            var c = "green";
            if (params.value === name) {
              c = "red";
            }
            return c;
          },
        },
      },
      series: [
        {
          name: "Percentage",
          type: "bar",
          data: map
            .filter(
              (item, index) =>
                index % parseInt(interval) === 0 || item.name === name
            )
            .map((element) => element[per_Name]),
          itemStyle: {
            color: function (params) {
              var c = "rgb(168,221,181) ";
              if (
                params.value ===
                  map.filter((item, index) => item.name === name)[0][
                    per_Name
                  ] &&
                first
              ) {
                c = "red";
                first = false;
              }
              return c;
            },
          },
        },
      ],
    };

    option && myChart.setOption(option);
  }
  render() {
    return (
      <div id={this.props.className} style={{ width: 1000, height: 500 }}></div>
    );
  }
}

export default Table;
