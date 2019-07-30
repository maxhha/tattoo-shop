// Section
import React from 'react';
import classNames from "classnames";
import './Section.scss';

type Props = {
    className?: string;
    title: string;
}

class Section extends React.Component<Props> {
    render() {
        return (
            <section className={classNames("section", this.props.className)}>
                <h2 className="section__title">{this.props.title}</h2>
                <ul className="tattoos-list">
                </ul>
            </section>
        )
    }
}

export default Section;
