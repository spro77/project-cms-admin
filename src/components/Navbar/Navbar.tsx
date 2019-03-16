import * as React from 'react';
import { PageHeader, Button, Input } from 'antd';

const Search = Input.Search;

export interface HeaderProps {
    title: string;
    subTitle: string;
}

export default class Navbar extends React.Component<HeaderProps> {
    render() {
        const { title, subTitle } = this.props;
        return (
            <PageHeader
                onBack={() => window.history.back()}
                title={title}
                subTitle={subTitle}
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
