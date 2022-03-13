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
      interval: 30,
    };
  }

  onKeywordChange = (kw) => {
    console.log(kw);
    this.setState({
      keyword: kw,
    });
  };

  onOpenChange = (view) => {
    console.log(view);
    this.setState({
      view: view,
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
    this.state = { interval: 30 };
  };

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
          />
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          {this.state.view === "map" ? (
            <Chart
              keyword={this.state.keyword}
              division={this.state.division}
              community={this.state.community}
            />
          ) : (
            <div>
              <h1>Female Lone Parent Family</h1>
              <Table
                map={adjusted_map}
                name="Pavilion 1"
                className="table1"
                interval={this.state.interval}
                title="Percentage of Total Lone-Parent Female Family Households"
                per_Name="per_Female_Total"
              ></Table>
              <Table
                map={adjusted_map}
                name="Pavilion 1"
                className="table2"
                interval={this.state.interval}
                title="Percentage of Female Lone Parent Family Households with 1 Child"
                per_Name="per_Female1"
              ></Table>
              <Table
                map={adjusted_map}
                name="Pavilion 1"
                className="table3"
                interval={this.state.interval}
                title="Percentage of Female Lone Parent Family Households with 2 Child"
                per_Name="per_Female2"
              ></Table>
              <Table
                map={adjusted_map}
                name="Pavilion 1"
                className="table4"
                interval={this.state.interval}
                title="Percentage of Female Lone Parent Family Households with 3+ Child"
                per_Name="per_Female3"
              ></Table>
              <h1>Households Income</h1>
              <Table
                map={adjusted_map}
                name="Pavilion 1"
                className="table5"
                interval={this.state.interval}
                title="Percentage of Households Income 0-19999"
                per_Name="per_Income2"
              ></Table>
              <Table
                map={adjusted_map}
                name="Pavilion 1"
                className="table6"
                interval={this.state.interval}
                title="Percentage of Households Income 20000-39999"
                per_Name="per_Income4"
              ></Table>
              <Table
                map={adjusted_map}
                name="Pavilion 1"
                className="table7"
                interval={this.state.interval}
                title="Percentage of Households Income 40000-59999"
                per_Name="per_Income6"
              ></Table>
              <Table
                map={adjusted_map}
                name="Pavilion 1"
                className="table8"
                interval={this.state.interval}
                title="Average Household Income"
                per_Name="per_Income_Ave"
              ></Table>
              <h1>Aboriginal Identity</h1>
              <Table
                map={adjusted_map}
                name="Pavilion 1"
                className="table9"
                interval={this.state.interval}
                title="Percentage of Household Population with Aboriginal Identity"
                per_Name="per_Abo"
              ></Table>
              <h1>Immigrant</h1>
              <Table
                map={adjusted_map}
                name="Pavilion 1"
                className="table10"
                interval={this.state.interval}
                title="Percentage of Household Population Immigrant"
                per_Name="per_Immi"
              ></Table>
              <Table
                map={adjusted_map}
                name="Pavilion 1"
                className="table11"
                interval={this.state.interval}
                title="Percentage of Household Population of Recent Immigrants (2017-Present)"
                per_Name="per_Immi_Rec"
              ></Table>
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
