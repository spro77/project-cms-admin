import * as React from 'react';
import { Col, Row, Layout, Icon } from 'antd';

const { Header } = Layout;

const Appheader = (): JSX.Element => {
    return (
        <Header style={{ padding: 0, backgroundColor: 'black' }}>
            <Row>
                <Col span={6}>
                    <div
                        className='logo'
                        style={{
                            color: 'white',
                            fontFamily:
                                '"Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Helvetica, Arial, sans-serif,"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                            fontWeight: 100,
                            fontSize: 24,
                            width: 400,
                            paddingLeft: 32
                        }}
                    >
                        <Icon type='dingding' />
                        <span style={{ marginLeft: '20px' }}>CMS Admin</span>
                    </div>
                </Col>
                <Col span={18} />
            </Row>
        </Header>
    );
};
export default Appheader;
