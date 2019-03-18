import * as React from 'react';
import { PageHeader, Button, Input, Icon } from 'antd';

const Search = Input.Search;

export interface HeaderProps {
    title: string;
    subTitle: string;
}

const Navbar = (props: HeaderProps): JSX.Element => {
    const { title, subTitle } = props;
    return (
        <PageHeader
            //onBack={() => window.history.back()}
            title={title}
            subTitle={subTitle}
            extra={[
                <Search
                    key='2'
                    placeholder='input search text'
                    onSearch={(value: string) => console.log(value)}
                    style={{ width: 200, marginInlineEnd: 48 }}
                />,
                <Button key='1' type='primary' onClick={this.showDrawer}>
                    <Icon type='plus' /> New Category
                </Button>
            ]}
        />
    );
};
export default Navbar;
