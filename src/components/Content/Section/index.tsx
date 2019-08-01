// Section
import React from 'react';
import classNames from "classnames";
import './Section.scss';
import "$commons/helpers.scss";

import { StoreItem } from "types";

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
                    {items.map(({id, imageUrl, title, price}) => (
                        <li className="tattoos-list__item" key={id}>
                            <div className="tattoo aspect-ratio-square">
                                <img className="tattoo__image" src={`${imageUrl}?auto=format&fit=crop&w=640&q=80`} alt={imageUrl} />
                                <div className="tattoo__description">
                                    <h2 className="tattoo__title">{title}</h2>
                                    <div className="tattoo__price-wrapper">
                                        <h2 className="tattoo__price">{price+'р'}</h2>
                                    </div>

                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        )
    }
}

export default Section;
