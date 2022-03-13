import React, { Component } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import Sidebar from './Sidebar';

import Chart from './chart';
class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:"grey", width:"100%" ,display:"flex", flexDirection:"row"}}>
        <div style={{ height:"100%"}}>
          <Sidebar />
        </div>
        <div style={{backgroundColor:"pink", width:"100%", height:"100%"}} >
        <Chart />
          </div>
      </div>
    );
  }
}

export default App;
