// Section
import React from 'react';
import classNames from "classnames";
import './Section.scss';
import "$commons/helpers.scss";

import { StoreItem } from "types";
import TattooItem from "./TattooItem";

type Props = {
    className?: string;
    title: string;
    items: StoreItem[];
}

class Section extends React.Component<Props> {
    render() {
        const {className, title, items} = this.props;
        return (
            <section className={classNames("section", className)}>
                <h2 className="section__title">{title}</h2>
                <ul className="tattoos-list">
                    {items.map((item) => <TattooItem item={item} key={item.id} />)}
                </ul>
            </section>
        )
    }
}

export default Section;
