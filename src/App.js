import React, { Component } from "react";
import Sidebar from './Sidebar';

import Chart from './chart';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword:"",
      view:"map",
      community:true,
      division:true
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

  onCommunity = () =>{
    this.setState({
      community:!this.state.community
    })
  }

  onDivision = () =>{
    this.setState({
      division:!this.state.division
    })
  }

  render() {
    return (
      <div style={{ width:"100%" ,display:"flex", flexDirection:"row"}}>
        <div style={{ height:"100%"}}>
          <Sidebar onKeywordChange={this.onKeywordChange} 
          view = {this.state.view} 
          onOpenChange= {this.onOpenChange}
          community={this.state.community}
          onCommunity = {this.onCommunity}
          division={this.state.division}
          onDivision={this.onDivision}
          />
        </div>
        <div style={{width:"100%", height:"100%"}} >
          {this.state.view==="map"?(
        <Chart keyword={this.state.keyword} division={this.state.division} community={this.state.community}/>
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
