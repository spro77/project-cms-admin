import * as React from 'react';
import { PageHeader, Button, Input } from 'antd';

const Search = Input.Search;

export interface HeaderProps {
    title: string;
}

export default class Navbar extends React.Component<HeaderProps, {}> {
    render() {
        return (
            <PageHeader
                //onBack={() => window.history.back()}
                title={this.props.title}
                subTitle='| Manage your product categories here'
                extra={[
                    <Search
                        key='2'
                        placeholder='input search text'
                        onSearch={(value: string) => console.log(value)}
                        style={{ width: 200, marginInlineEnd: 48 }}
                    />,
                    <Button key='1' type='primary'>
                        New Category
                    </Button>
                ]}
            />
        );
    }
}
