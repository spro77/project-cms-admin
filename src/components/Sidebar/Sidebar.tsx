import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, match } from 'react-router-dom';

const { Sider } = Layout;

export default class Sidebar extends React.Component {
    state = {
        collapsed: true
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    public render() {
        return (
            <Sider
                style={{ height: '100%' }}
                onMouseEnter={this.toggle}
                onMouseLeave={this.toggle}
                theme='light'
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
            >
                <Menu theme='light' mode='inline' defaultSelectedKeys={['2']}>
                    <Menu.Item key='1'>
                        <Link to='/Dashboard'>
                            <Icon type='dashboard' />
                            <span>Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='2'>
                        <Link to='/Categories'>
                            <Icon type='tags' />
                            <span>Categories</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='3'>
                        <Link to='/Products'>
                            <Icon type='barcode' />
                            <span>Products</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='4'>
                        <Link to='/Customers'>
                            <Icon type='team' />
                            <span>Customers</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='5'>
                        <Link to='/Sales'>
                            <Icon type='shopping-cart' />
                            <span>Sales</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='6'>
                        <Link to='/Settings'>
                            <Icon type='setting' />
                            <span>Settings</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}
