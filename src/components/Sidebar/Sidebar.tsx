import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

interface ClickParam {
    key: string;
}
interface sidebarProps {
    clickHandle: (key: number) => void;
}

export default class Sidebar extends React.Component<sidebarProps> {
    state = {
        collapsed: true
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        const { clickHandle } = this.props;
        /* clickHandle = (e: ClickParam) => {
            this.setState({
                selected: [`${e.key}`]
            });
        }; */
        return (
            <Sider
                style={{ height: document.documentElement.clientHeight }}
                onMouseEnter={this.toggle}
                onMouseLeave={this.toggle}
                theme='light'
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}>
                <Menu theme='light' mode='inline' defaultSelectedKeys={['1']}>
                    <Menu.Item key='1' onClick={e => clickHandle(parseInt(e.key))}>
                        <Link to='/Dashboard'>
                            <Icon type='dashboard' />
                            <span>Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='2' onClick={e => clickHandle(parseInt(e.key))}>
                        <Link to='/Categories'>
                            <Icon type='tags' />
                            <span>Categories</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='3' onClick={e => clickHandle(parseInt(e.key))}>
                        <Link to='/Products'>
                            <Icon type='barcode' />
                            <span>Products</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='4' onClick={e => clickHandle(parseInt(e.key))}>
                        <Link to='/Customers'>
                            <Icon type='team' />
                            <span>Customers</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='5' onClick={e => clickHandle(parseInt(e.key))}>
                        <Link to='/Sales'>
                            <Icon type='shopping-cart' />
                            <span>Sales</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='6' onClick={e => clickHandle(parseInt(e.key))}>
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
