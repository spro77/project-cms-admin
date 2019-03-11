import * as React from "react";
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

export default class Sidebar extends React.Component {

    state = {
        collapsed: true,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    public render() {
        return (
            <Sider
                onMouseEnter={this.toggle}
                onMouseLeave={this.toggle}
                theme="light"
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
            >
                <Menu theme="light" mode="inline" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">
                        <Icon type="dashboard" />
                        <span>Dashboard</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="tags" />
                        <span>Categories</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="barcode" />
                        <span>Products</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="team" />
                        <span>Customers</span>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Icon type="shopping-cart" />
                        <span>Sales</span>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Icon type="setting" />
                        <span>Settings</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}