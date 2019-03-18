import * as React from 'react';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

function callback(key: string): void {
    console.log(key);
}

export default class Categories extends React.Component {
    render() {
        return (
            <Collapse onChange={callback}>
                <Panel header='This is panel header 1' key='1'>
                    <Collapse>
                        <Panel header='This is panel nest panel' key='1'>
                            <p>weFGVGNY</p>
                        </Panel>
                    </Collapse>
                </Panel>
                <Panel header='This is panel header 2' key='2'>
                    <p>AGTSYNTHTNYU</p>
                </Panel>
                <Panel header='This is panel header 3' key='3'>
                    <p>SFGBFGNBDHN</p>
                </Panel>
            </Collapse>
        );
    }
}
