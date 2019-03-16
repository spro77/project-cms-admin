import * as React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { Layout } from 'antd';
import SideBar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Appheader from '../../components/Appheader/Appheader';
import Viewport from '../Viewport/Viewport';
import Dashboard from '../../components/Dashboard/Dashboard';
import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';
import Customers from '../../components/Customers/Customers';
import Sales from '../../components/Sales/Sales';
import Settings from '../../components/Settings/Settings';
import './App.css';

const App = (): JSX.Element => {
    return (
        <Router>
            <div>
                <Appheader />
                <Layout>
                    <SideBar />
                    <Layout>
                        <Navbar title='Categories' />
                        <Viewport>
                            <Route
                                exact
                                path='/Dashboard'
                                component={Dashboard}
                            />
                            <Route
                                exact
                                path='/Categories'
                                component={Categories}
                            />
                            <Route
                                exact
                                path='/Products'
                                component={Products}
                            />
                            <Route
                                exact
                                path='/Customers'
                                component={Customers}
                            />
                            <Route exact path='/Sales' component={Sales} />
                            <Route
                                exact
                                path='/Settings'
                                component={Settings}
                            />
                        </Viewport>
                    </Layout>
                </Layout>
            </div>
        </Router>
    );
};
export default App;
