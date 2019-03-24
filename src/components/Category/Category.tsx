import * as React from 'react';
import { Card, Icon } from 'antd';

interface CatProps {
    title: string;
    id: string;
    handlerDelete?: (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => void;
    handlerAdd?: (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => void;
    handlerEdit?: (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => void;
    children: boolean | JSX.Element[];
}

const Category = (props: CatProps): JSX.Element => {
    const { title, handlerDelete, handlerAdd, handlerEdit, children, id } = props;

    return (
        <Card
            title={title}
            style={children ? { marginTop: 8 } : { marginTop: 16, height: 48 }}
            type='inner'
            extra={[
                <Icon key='11' type='plus' onClick={e => handlerAdd(e, id)} style={{ marginRight: 16 }} />,
                <Icon key='12' type='edit' onClick={e => handlerEdit(e, id)} style={{ marginRight: 16 }} />,
                <Icon key='13' type='delete' onClick={e => handlerDelete(e, id)} />
            ]}>
            {children}
        </Card>
    );
};

export default Category;
