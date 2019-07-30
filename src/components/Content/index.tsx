// Content
import { IStore, StoreSection, StoreItem } from "types";
import React from "react";
import classNames from "classnames";
import "./Content.scss";

import Section from "./Section";

type Props = {
    className?: string;
    store: IStore;
};

type ContentSection = {
    id: string,
    title: string,
    items: StoreItem[]
}

class Content extends React.Component<Props> {
    state = {
        sections: [] as ContentSection[]
    }
    async componentDidMount() {
        const store = this.props.store;

        const loadSectionItems = (section : StoreSection) =>
            store.getItems(section)
                .then((items: StoreItem[]) =>
                    {return {...section, items}}
                );

        const sections = await store.getSections()
            .then( (sections) =>
                Promise.all(sections.map(loadSectionItems))
            );

        this.setState({sections});
    }
    render() {
        const { sections } = this.state;
        return (
            <div
                className={classNames("content", this.props.className)}
                >
                <div className="content__inner">
                    <div className="face-image">
                        <div className="face-image__title">
                            КРУТЫЕ ТАТУХИ ДЕЛАЮТ ТЕБЯ КРУТЫМ!
                        </div>
                    </div>
                    {sections.slice(0, 3).map(({id, title, items}) => (
                        <Section
                            className="content__section"
                            title={title}
                            key={id}
                            items={items.slice(0, 8)}
                            />
                    ))}
                </div>
            </div>
        );
    }
}

export default Content;
