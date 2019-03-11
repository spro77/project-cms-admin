import * as React from "react";
import { PageHeader, Button, Input } from 'antd';

const Search = Input.Search;

export interface HeaderProps { title: string; }

export default class Navbar extends React.PureComponent<HeaderProps, {}> {

    render() {
        return (
            <PageHeader
                //onBack={() => window.history.back()}
                title={this.props.title}
                //subTitle="This is a subtitle"
                extra={[
                    <Search
                        placeholder="input search text"
                        onSearch={(value: string) => console.log(value)}
                        style={{ width: 200, marginInlineEnd: 100, }}
                    />,
                    <Button key="1" type="primary">
                        New Category
                    </Button>,
                ]}
            >
            </PageHeader>
        );
    }
}