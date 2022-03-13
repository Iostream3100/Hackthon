import React, { Component } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import Sidebar from './Sidebar';

import Chart from './chart';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword:"",
      view:"map"
    };
  }

  onKeywordChange = (kw) =>{
    console.log(kw);
    this.setState({
      keyword:kw
    });
  }

  onOpenChange = (view) =>{
    console.log(view);
    this.setState({
      view:view
    })
  }

  render() {
    return (
      <div style={{ width:"100%" ,display:"flex", flexDirection:"row"}}>
        <div style={{ height:"100%"}}>
          <Sidebar onKeywordChange={this.onKeywordChange} view = {this.state.view} onOpenChange= {this.onOpenChange}/>
        </div>
        <div style={{width:"100%", height:"100%"}} >
          {this.state.view==="map"?(
        <Chart keyword={this.state.keyword}/>
        )
        :(
          <div></div>
        )
      }
  </div>
      </div>
    );
  }
}
 
export default App;
