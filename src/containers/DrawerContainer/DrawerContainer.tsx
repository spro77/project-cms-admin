import * as React from 'react';
import 'antd/dist/antd.css';
//import './index.css';
import { Drawer, Form, Button, Col, Row, Input } from 'antd';

export interface drawerProps {
    toggleDrawer: boolean;
    showDrawer: () => void;
}

const DrawerContainer = (props: drawerProps): JSX.Element => {
    const { showDrawer, toggleDrawer } = props;

    return (
        <div>
            <Drawer
                title='Create a new account'
                width={720}
                onClose={showDrawer}
                visible={toggleDrawer}
                style={{
                    overflow: 'auto',
                    height: 'calc(100% - 108px)',
                    paddingBottom: '108px'
                }}>
                <Form layout='vertical' hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label='Name' />
                        </Col>
                        <Col span={12}>
                            <Form.Item label='Url'>
                                (
                                <Input
                                    style={{ width: '100%' }}
                                    addonBefore='http://'
                                    addonAfter='.com'
                                    placeholder='Please enter url'
                                />
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                <div
                    style={{
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                        width: '100%',
                        borderTop: '1px solid #e9e9e9',
                        padding: '10px 16px',
                        background: '#fff',
                        textAlign: 'right'
                    }}>
                    <Button style={{ marginRight: 8 }} onClick={showDrawer}>
                        Cancel
                    </Button>
                    <Button type='primary'>Submit</Button>
                </div>
            </Drawer>
        </div>
    );
};
export default DrawerContainer;
