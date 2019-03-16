import * as React from 'react';
import { Route, BrowserRouter as Router, Switch as RouterSwitch, Redirect } from 'react-router-dom';
//import { browserHistory } from 'react-router'
import { Layout, Switch } from 'antd';
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
import Notfound from '../../components/Notfound/Notfound';
import './App.css';

const App = (): JSX.Element => {
    const headerTitle = {
        title: 'Categories',
        subTitle: '| Manage your product categories here'
    };
    return (
        <Router>
            <div>
                <Appheader />
                <Layout>
                    <SideBar clickHandle={(key: number) => console.log(key)} />
                    <Layout>
                        <Navbar {...headerTitle} />
                        <Viewport>
                            <RouterSwitch>
                                <Redirect from='/Dashboard' to='/' />
                                <Route exact path='/' component={Dashboard} />
                                <Route exact path='/Categories' component={Categories} />
                                <Route exact path='/Products' component={Products} />
                                <Route exact path='/Customers' component={Customers} />
                                <Route exact path='/Sales' component={Sales} />
                                <Route path='/Settings' component={Settings} />
                                <Route component={Notfound} />
                            </RouterSwitch>
                        </Viewport>
                    </Layout>
                </Layout>
            </div>
        </Router>
    );
};
export default App;
