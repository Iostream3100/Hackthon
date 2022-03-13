import React, { Component } from "react";
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent,Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Input} from 'antd';
import 'react-pro-sidebar/dist/css/styles.css';
// import './Sidebar.scss';

import { FaGem, FaHeart } from "react-icons/fa";

const { Search } = Input;
class Sidebar extends Component {
  
    render() {
      return (<ProSidebar style={{height:"100vh"}}>
        <SidebarHeader>
        <h1> Food Insecurity</h1>

  </SidebarHeader>
  <SidebarContent>
  <Menu iconShape="square">
        <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
        <SubMenu title="Components" icon={<FaHeart />}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
  </SidebarContent>
  <SidebarFooter>
    {/**
     *  You can add a footer for the sidebar ex: copyright
     */}
  </SidebarFooter>


    </ProSidebar>);
    }
}

  export default Sidebar;