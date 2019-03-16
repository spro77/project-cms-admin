import * as React from 'react';
import { Layout } from 'antd';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '../../components/Dashboard/Dashboard';
import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';
import Customers from '../../components/Customers/Customers';
import Sales from '../../components/Sales/Sales';
import Settings from '../../components/Settings/Settings';

const Content = Layout.Content;

export interface HeaderProps {
    title: string;
}

export default class Viewport extends React.PureComponent<{}, {}> {
    render() {
        return (
            <Router>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 1200
                    }}
                >
                    <div>
                        <Route exact path='/Dashboard' component={Dashboard} />
                        <Route
                            exact
                            path='/Categories'
                            component={Categories}
                        />
                        <Route exact path='/Products' component={Products} />
                        <Route exact path='/Customers' component={Customers} />
                        <Route exact path='/Sales' component={Sales} />
                        <Route exact path='/Settings' component={Settings} />
                    </div>
                </Content>
            </Router>
        );
    }
}
