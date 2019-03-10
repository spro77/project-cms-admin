import * as React from "react";
import { Layout, Menu, Icon } from 'antd';
import './App.css';

const { Header, Sider, Content, Footer } = Layout;


export class App extends React.Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    />
                </Header>
                <Layout>
                    <Sider
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
                    <Content style={{
                        margin: '24px 16px', padding: 24, background: '#fff', minHeight: 1200,
                    }}
                    >
                        Content
              </Content>
                </Layout>
                <Footer></Footer>
            </Layout>
        );
    }
}