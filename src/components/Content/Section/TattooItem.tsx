import React from "react";
import { Link } from "react-router-dom";
import { StoreItem } from "types";

type Props = {
    item: StoreItem,
}

const TattooItem : React.FC<Props> = ({item}) => {
    const {id, imageUrl, title, price} = item
    return (
        <li className="tattoos-list__item">
            <Link to={{
                pathname: `/tattoo/${id}`,
                state: {modal: true}
            }}>
                <div className="tattoo aspect-ratio-square">
                    <img className="tattoo__image" src={`${imageUrl}?auto=format&fit=crop&w=640&q=80`} alt={imageUrl} />
                    <div className="tattoo__description">
                        <h2 className="tattoo__title">{title}</h2>
                        <div className="tattoo__price-wrapper">
                            <h2 className="tattoo__price">{price+'р'}</h2>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default TattooItem;
