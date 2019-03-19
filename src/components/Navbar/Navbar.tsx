import * as React from 'react';
import { PageHeader, Button, Input, Icon } from 'antd';

const Search = Input.Search;

export interface HeaderProps {
    title: string;
    subTitle: string;
    showDrawer: () => void;
}

export default class Navbar extends React.Component<HeaderProps> {
    render() {
        const { showDrawer } = this.props;
        return (
            <PageHeader
                //onBack={() => window.history.back()}
                title={this.props.title}
                subTitle={this.props.subTitle}
                extra={[
                    <Search
                        //key='2'
                        placeholder='input search text'
                        onSearch={(value: string) => console.log(value)}
                        style={{ width: 200, marginRight: 32 }}
                    />,
                    <Button key='1' type='primary' onClick={showDrawer}>
                        <Icon type='plus' /> New Category
                    </Button>
                ]}
            />
        );
    }
}
