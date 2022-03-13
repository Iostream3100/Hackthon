import React,{ Component } from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { Input } from "antd";
import "react-pro-sidebar/dist/css/styles.css";
// import './Sidebar.css';

import { FaGem, FaHeart } from "react-icons/fa";

const { Search } = Input;
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onToggle = (value) => {
    console.log("a");
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onSearch = (value) => {
    this.props.onKeywordChange(value);
  };

  render() {
    return (
      <ProSidebar 
        onToggle={this.onToggle}
        collapsed={this.state.collapsed}
        style={{ height: "100vh", 
        width: "300px", }}
      >
        <SidebarHeader
          style={{
            display: "flex",
            flexDirection: "colomn",
            justifyContent: "center",
          }}
        >
          <img src={require('./unitedway.png')} width="300"  />
        </SidebarHeader>
        <SidebarContent>
        <h1> Food Insecurity</h1>
          <Search
            addonBefore="community"
            placeholder="input search text"
            size="large"
            onSearch={this.onSearch}
            style={{ width: 304 }}
          />
          <Menu iconShape="square" subMenuBullets="true">
            <SubMenu
              title="View in Map"
              open={this.props.view === "map"}
              onOpenChange={() => this.props.onOpenChange("map")}
              icon={<FaHeart />}
            >
              <MenuItem
                active={this.props.community}
                onClick={() => this.props.onCommunity()}
              >
                Community
              </MenuItem>

              <MenuItem
                active={this.props.division}
                onClick={() => this.props.onDivision()}
              >
                Division
              </MenuItem>
            </SubMenu>
            <SubMenu
              icon={<FaGem />}
              open={this.props.view === "stat"}
              onOpenChange={() => this.props.onOpenChange("stat")}
              title="Statistics"
            >
             <MenuItem
                active={this.props.type==="1"}
                onClick={() => this.props.onChangeType("1")}
              >
                Female Lone Family
              </MenuItem>
              <MenuItem
                active={this.props.type==="2"}
                onClick={() => this.props.onChangeType("2")}
              >
                Households Income
              </MenuItem>
              <MenuItem
                active={this.props.type==="3"}
                onClick={() => this.props.onChangeType("3")}
              >
                Aboriginal Identity
              </MenuItem>
              <MenuItem
                active={this.props.type==="4"}
                onClick={() => this.props.onChangeType("4")}
              >
                Immigrant Status
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          {/**
           *  You can add a footer for the sidebar ex: copyright
           */}
        </SidebarFooter>
      </ProSidebar>
    );
  }
}

export default Sidebar;
