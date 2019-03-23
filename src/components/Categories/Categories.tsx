import * as React from 'react';
import Category from '../Category/Category';

type catInit = {
    header: string;
    descendants: catInit[];
};

export default class Categories extends React.Component {
    state = {
        categoriesData: [
            {
                header: 'My First Header',
                descendants: [
                    {
                        header: 'Subcomponent 1',
                        descendants: []
                    },
                    {
                        header: 'Subcomponent 2',
                        descendants: []
                    }
                ]
            },
            {
                header: 'My Seconf Header',
                descendants: []
            }
        ] as catInit[]
    };

    handlerDelete = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        console.log('deleted');
        e.stopPropagation();
    };
    handlerEdit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        console.log('edited');
        e.stopPropagation();
    };
    handlerAdd = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        console.log('added');
        e.stopPropagation();
    };

    elementParsing = (elem: catInit): JSX.Element => {
        return (
            <Category
                {...elem}
                handlerDelete={this.handlerDelete}
                handlerEdit={this.handlerEdit}
                handlerAdd={this.handlerAdd}>
                {elem.descendants.length > 0 ? elem.descendants.map(sub => this.elementParsing(sub)) : false}
            </Category>
        );
    };

    elements = this.state.categoriesData.map(item => {
        return <li key={this.state.categoriesData.indexOf(item)}>{this.elementParsing(item)}</li>;
    });

    render() {
        if (this.state.categoriesData.length > 0) {
            return <ul style={{ listStyleType: 'none' }}>{this.elements}</ul>;
        }
        return <p>Nothing to show</p>;
    }
}
