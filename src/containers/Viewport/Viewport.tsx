import * as React from 'react';
import { Layout } from 'antd';
const Content = Layout.Content;

export default class Viewport extends React.Component {
    render() {
        return (
            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#fff',
                    minHeight: 1200
                }}
            >
                {this.props.children}
            </Content>
        );
    }
}
