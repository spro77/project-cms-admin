import * as React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { Layout } from 'antd';
import SideBar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Appheader from '../../components/Appheader/Appheader';
import Viewport from '../Viewport/Viewport';
import './App.css';

const App = (): JSX.Element => {
    return (
        <Layout>
            <Appheader />
            <Layout>
                <SideBar />
                <Layout>
                    <Navbar title='Categories' />
                    <Viewport />
                </Layout>
            </Layout>
        </Layout>
    );
};
export default App;
