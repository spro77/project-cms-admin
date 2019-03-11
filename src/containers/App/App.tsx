import * as React from "react";
import { Layout } from 'antd';
import SideBar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import './App.css';

const { Header, Sider, Content, Footer } = Layout;


export class App extends React.Component {

    render() {
        return (
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                </Header>
                <Layout>
                    <SideBar />
                    <Layout>
                        <Navbar title="Categories"></Navbar>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 1200, }}
                        >
                        </Content>
                    </Layout>
                </Layout>
                <Footer></Footer>
            </Layout>
        );
    }
}