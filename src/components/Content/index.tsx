// Content
import { IStore, StoreSection } from "types";
import React from "react";
import classNames from "classnames";
import "./Content.scss";

import Section from "./Section";

type Props = {
    className?: string;
    store: IStore;
};

class Content extends React.Component<Props> {
    state = {
        sections: [] as StoreSection[]
    }
    async componentDidMount() {
        const sections = await this.props.store.getSections();
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
                    {sections.map(({id, title}) => (
                        <Section
                            className="content__section"
                            title={title}
                            key={id}
                            />
                    ))}
                </div>
            </div>
        );
    }
}

export default Content;
