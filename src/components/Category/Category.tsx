import * as React from 'react';
import { Collapse, Icon } from 'antd';
const Panel = Collapse.Panel;

interface CatProps {
    header: string;
    handlerDelete?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    handlerAdd?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    handlerEdit?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

interface CatState {
    key: string;
    isActive: boolean;
}

export default class Category extends React.Component<CatProps, CatState> {
    state = {
        key: '1',
        isActive: false
    };

    /* keyIncrement = () => {
        this.setState(state => {
            const newKey = this.state.key + 1;
            return {
                key: newKey
            };
        });
    };

    isActiveToggler = () => {
        this.setState(state => {
            return {
                isActive: !state.isActive
            };
        });
    }; */

    render() {
        const customPanelStyle = {
            background: '#f7f7f7',
            borderRadius: 4,
            marginBottom: 24,
            border: 0,
            overflow: 'hidden'
        };
        const style = {
            marginRight: 16
        };
        const { header, handlerDelete, handlerAdd, handlerEdit } = this.props;

        return (
            <Collapse
                bordered={false}
                expandIcon={({ isActive }) => <Icon type='caret-right' rotate={isActive ? 90 : 0} />}>
                <Panel
                    header={header}
                    key={this.state.key}
                    style={customPanelStyle}
                    extra={[
                        <Icon key='11' type='plus' onClick={e => handlerAdd(e)} style={style} />,
                        <Icon key='12' type='edit' onClick={e => handlerEdit(e)} style={style} />,
                        <Icon key='13' type='delete' onClick={e => handlerDelete(e)} style={style} />
                    ]}>
                    {this.props.children}
                </Panel>
            </Collapse>
        );
    }
}
