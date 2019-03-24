import * as React from 'react';
import { cloneDeep } from 'lodash';

import Category from '../Category/Category';
import Guide from '../../util/CreateGuid';

export type CatInit = {
    title: string;
    id: string;
    descendants: CatInit[];
};

interface CatState {
    categoriesData: CatInit[];
}

export default class Categories extends React.Component<{}, CatState> {
    state = {
        categoriesData: [
            {
                title: 'My First title',
                id: Guide.newGuid(),
                descendants: [
                    {
                        title: 'Subcomponent 1',
                        id: Guide.newGuid(),
                        descendants: [
                            {
                                title: 'Sub-subcomponent',
                                id: Guide.newGuid(),
                                descendants: [] as CatInit[]
                            }
                        ]
                    }
                ]
            },
            {
                title: 'My Seconf title',
                id: Guide.newGuid(),
                descendants: [] as CatInit[]
            }
        ] as CatInit[]
    };

    handlerAdd = (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => {
        const newItem = {
            title: 'New Category',
            id: Guide.newGuid(),
            descendants: [] as CatInit[]
        };

        //Function to add a obj in a tree

        const addToTree = (arr: CatInit[]): void => {
            arr.forEach(element => {
                if (element.id == id) {
                    element.descendants.unshift(newItem);
                } else if (element.descendants.length > 0) {
                    addToTree(element.descendants);
                }
            });
        };

        this.setState(({ categoriesData }) => {
            const deepCopy: CatInit[] = cloneDeep(this.state.categoriesData);
            addToTree(deepCopy);
            return {
                categoriesData: [...deepCopy]
            };
        });
        e.stopPropagation();
    };

    handlerDelete = (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => {
        //Function to del a obj in a tree

        const delFromTree = (arr: CatInit[]): void => {
            arr.forEach(element => {
                if (element.id == id) {
                    arr.splice(arr.indexOf(element), 1);
                } else if (element.descendants.length > 0) {
                    delFromTree(element.descendants);
                }
            });
        };

        this.setState(({ categoriesData }) => {
            const deepCopy: CatInit[] = cloneDeep(this.state.categoriesData);
            delFromTree(deepCopy);
            return {
                categoriesData: [...deepCopy]
            };
        });
        e.stopPropagation();
    };

    handlerEdit = (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => {
        const newItem = {
            title: 'New Category',
            id: Guide.newGuid(),
            descendants: [] as CatInit[]
        };

        this.setState(({ categoriesData }) => {
            const newArr = [...categoriesData, ...[newItem]];
            return {
                categoriesData: newArr
            };
        });

        e.stopPropagation();
    };

    elementParsing = (elem: CatInit): JSX.Element => {
        return (
            <Category
                key={elem.id}
                id={elem.id}
                title={elem.title}
                handlerDelete={this.handlerDelete}
                handlerEdit={this.handlerEdit}
                handlerAdd={this.handlerAdd}>
                {elem.descendants.length > 0 ? elem.descendants.map(sub => this.elementParsing(sub)) : false}
            </Category>
        );
    };

    render() {
        const elements = this.state.categoriesData.map(item => {
            return this.elementParsing(item);
        });

        if (this.state.categoriesData.length > 0) {
            return <>{elements}</>;
        }
        return <p>Nothing to show. Please create Categories first</p>;
    }
}
