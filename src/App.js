import React, { Component } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import Sidebar from "./Sidebar";
// import { readFile } from "fs";
import Chart from "./chart";
import Table from "./table";
import { map } from "./dataMap";

const adjusted_map = map.map((obj) => ({
  name: obj.name,
  per_Female_Total: 100 * obj.per_Female_Total,
  per_Female1: 100 * obj.per_Female1,
  per_Female2: 100 * obj.per_Female2,
  per_Female3: 100 * obj.per_Female3,
  per_Income2: 100 * obj.per_Income2,
  per_Income4: 100 * obj.per_Income4,
  per_Income6: 100 * obj.per_Income6,
  per_Income_Ave: 100 * obj.per_Income_Ave,

  per_Abo: 100 * obj.per_Abo,
  per_Immi: 100 * obj.per_Immi,
  per_Immi_Rec: 100 * obj.per_Immi_Rec,
}));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      view: "map",
      community: true,
      division: true,
      currCSD:"Pavilion 1",
      interval: 30,
      type:"0"
    };
  }

  onKeywordChange = (kw) => {
    console.log(kw);
    this.setState({
      keyword: kw,
      view:"map"
    });
  };

  onOpenChange = (view) => {
    console.log(view);
    this.setState({
      view: view,
      type:"0"
    });
  };

  onCommunity = () => {
    this.setState({
      community: !this.state.community,
    });
  };

  onDivision = () => {
    this.setState({
      division: !this.state.division,
    });
    // this.state = { interval: 30 };
  };

  onChooseCSD = (csd)=>{
    this.setState({
      currCSD:csd,
      view:"stat"

    })
  }
  onChangeType = (type)=>{
    this.setState({
      type:type
    })
    console.log(type);
  }

  female = () =>{
    
  }

  render() {
    return (
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <div style={{ height: "100%" }}>
          <Sidebar
            onKeywordChange={this.onKeywordChange}
            view={this.state.view}
            onOpenChange={this.onOpenChange}
            community={this.state.community}
            onCommunity={this.onCommunity}
            division={this.state.division}
            onDivision={this.onDivision}
            type={this.state.type}
            onChangeType={this.onChangeType}
          />
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          {this.state.view === "map" ? (
            <Chart
              keyword={this.state.keyword}
              division={this.state.division}
              community={this.state.community}
              onChooseCSD={this.onChooseCSD}
            />
          ) : (
            <div  >
              <h1> Statistics of {this.state.currCSD}</h1>
              {this.state.type==="0" || this.state.type==="1"?( 
              <div>
              <h2>Female Lone Parent Family</h2>
              <Table
                map={adjusted_map}
                name={this.state.currCSD}
                className="table1"
                interval={this.state.interval}
                title="Percentage of Total Lone-Parent Female Family Households"
                per_Name="per_Female_Total"
              ></Table>
              <Table
                map={adjusted_map}
                name={this.state.currCSD}
                className="table2"
                interval={this.state.interval}
                title="Percentage of Female Lone Parent Family Households with 1 Child"
                per_Name="per_Female1"
              ></Table>
              <Table
                map={adjusted_map}
                name={this.state.currCSD}
                className="table3"
                interval={this.state.interval}
                title="Percentage of Female Lone Parent Family Households with 2 Child"
                per_Name="per_Female2"
              ></Table>
              <Table
                map={adjusted_map}
                name={this.state.currCSD}
                className="table4"
                interval={this.state.interval}
                title="Percentage of Female Lone Parent Family Households with 3+ Child"
                per_Name="per_Female3"
              ></Table>
              </div>):(<div/>)}

              {this.state.type==="0" || this.state.type==="2"?( 
              <div>
              <h2>Households Income</h2>
              <Table
                map={adjusted_map}
                name={this.state.currCSD}
                className="table5"
                interval={this.state.interval}
                title="Percentage of Households Income 0-19999"
                per_Name="per_Income2"
              ></Table>
              <Table
                map={adjusted_map}
                name={this.state.currCSD}
                className="table6"
                interval={this.state.interval}
                title="Percentage of Households Income 20000-39999"
                per_Name="per_Income4"
              ></Table>
              <Table
                map={adjusted_map}
                name={this.state.currCSD}
                className="table7"
                interval={this.state.interval}
                title="Percentage of Households Income 40000-59999"
                per_Name="per_Income6"
              ></Table>
              <Table
                map={adjusted_map}
                name={this.state.currCSD}
                className="table8"
                interval={this.state.interval}
                title="Average Household Income"
                per_Name="per_Income_Ave"
              ></Table>
              </div>
              ):(<div/>)}

            {this.state.type==="0" || this.state.type==="3"?( 
              <div>
              <h2>Aboriginal Identity</h2>
              <Table
                map={adjusted_map}
                name={this.state.currCSD}
                className="table9"
                interval={this.state.interval}
                title="Percentage of Household Population with Aboriginal Identity"
                per_Name="per_Abo"
              ></Table>
              </div>
            ):(<div/>)}

            {this.state.type==="0" || this.state.type==="4"?( 
              <div>
              <h2>Immigrant Status</h2>
              <Table
                map={adjusted_map}
                name={this.state.currCSD}
                className="table10"
                interval={this.state.interval}
                title="Percentage of Household Population Immigrant"
                per_Name="per_Immi"
              ></Table>
              <Table
                map={adjusted_map}
                name={this.state.currCSD}
                className="table11"
                interval={this.state.interval}
                title="Percentage of Household Population of Recent Immigrants (2017-Present)"
                per_Name="per_Immi_Rec"
              ></Table>
              </div>
            ):(<div/>)}
            </div>
          )}
        </div>
      </div>

      /* <div
          style={{
            backgroundColor: "grey",
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ height: "100%" }}>
            <Sidebar />
          </div>

          <div
            style={{ backgroundColor: "pink", width: "100%", height: "100%" }}
          >
            <Chart />
          </div>
        </div> */

      /* t
          able(
        map,
        ,
        "table1",
        interval,
        ,
        
      );
      table(
        map,
        "Fountain 11, BC (IRI)",
        "table2",
        interval,
       
      
      table(
        map,
        "Fountain 11, BC (IRI)",
        "table5",
        interval,
     
      );
      table(
        map,
        "Fountain 11, BC (IRI)",
        "table6",
        interval,
        
      );
      table(
        map,
        "Fountain 11, BC (IRI)",
        "table7",
        interval,
        
      );
      table(
        map,
        "Fountain 11, BC (IRI)",
        "table8",
        interval,
     
      );
      table(
        map,
        "Fountain 11, BC (IRI)",
        "table9",
        interval,
       
      );
      table(
        map,
        "Fountain 11, BC (IRI)",
        "table10",
        interval,
       
      );
      table(
        map,
        "Fountain 11, BC (IRI)",
        "table11",
        interval,
       
      );</div> */
    );
  }
}

export default App;
