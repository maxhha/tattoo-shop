// Content
import React from "react";
import classNames from "classnames";
import "./Content.scss";

import Section from "./Section";

type Props = {
    className?: string;
};

class Content extends React.Component<Props> {
    render() {
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
                    <Section
                        className="content__section"
                        title="Могущественные силы полубогов"
                        />
                </div>
            </div>
        );
    }
}

export default Content;
