import React from 'react';
import { Layout, Menu } from 'antd';
import { DashboardOutlined, PieChartOutlined, FolderOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Sider } = Layout;

const SiderMenu = () => {
    return (
        <Sider className="site-layout-background" width={150}>
          <div className="logo">
            Logo Goes Here
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
          
            <Menu.Item key='1' icon={<DashboardOutlined />}>
            <span>Deshboard</span>
            <Link to="/" />
            </Menu.Item>

            <SubMenu icon={<PieChartOutlined />} title="Deals">
              <Menu.Item icon={<PieChartOutlined />}>
              <span>Deal 1</span>
              <Link to="/deals" />
              </Menu.Item>
              <Menu.Item>Deal Name 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<FolderOutlined />} title="Documents">
            </SubMenu>
          </Menu>
        </Sider>
    )
}
export default SiderMenu;