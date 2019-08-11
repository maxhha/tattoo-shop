//Tattoo Page
import React, { useState, useContext, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import "./TattooPage.scss";
import classNames from "classnames";
import { StoreItem } from "types";

import StoreContext from "apis/StoreContext";
import CartContext from "components/CartContext";

interface MatchProps {
    id: string
}

interface Props extends RouteComponentProps<MatchProps> {
    className?: string
}

const TattooPage : React.FC<Props> = (props) => {
    const params = props.match && props.match.params;
    const { id } = params || {id: undefined};

    const [{item, loading}, setLoaderState] = useState<{
        item: StoreItem | null,
        loading: boolean
    }>({
        item: null, loading: true
    });

    const { findItem } = useContext(StoreContext);
    const [cart, dispatchCart] = useContext(CartContext);
    const addedToCart = !!id && !!cart.items.find(i => i.id === id);

    console.log(`addedToCart ${addedToCart}`);
    useEffect(() => {
        if (id)
            findItem(id).then((item) => setLoaderState({item, loading: false}));
    },[findItem, setLoaderState, id]);

    const isModal = (!props.location.state || !props.location.state.modal);

    if (id && !loading && item) {
        return (
            <div
                className={classNames("tattoo-page", props.className)}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="tattoo-page__image-wrapper">
                    <img
                        className="tattoo-page__image"
                        src={`${item.imageUrl}?auto=format&fit=crop&w=640&q=90`}
                        alt={item.title}
                    />
                </div>
                <div className="tattoo-page__info">
                    <h2 className="tattoo-page__title">{item.title}</h2>
                    <h3 className="tattoo-page__price">{item.price+"р"}</h3>
                    <button
                        className="tattoo-page__to-cart"
                        onClick={() => {
                            if (addedToCart)
                                dispatchCart({
                                    type: "remove",
                                    id: item.id
                                })
                            else if (!loading)
                                dispatchCart({
                                    type: "add",
                                    item: item
                                })
                        }}
                    >
                        {addedToCart ? "Убрать из корзины" : "В корзину"}
                    </button>
                    <p className="tattoo-page__description"> Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: сплочённость команды профессионалов в значительной степени обусловливает важность соответствующих условий активизации. А ещё стремящиеся вытеснить традиционное производство, нанотехнологии ограничены исключительно образом мышления. </p>
                </div>
                {isModal && (
                    <button
                        className="tattoo-page__close"
                        onClick={(e) => {
                            e.stopPropagation();
                            props.history.goBack();
                        }}
                    />
                )}
            </div>
        );
    } else if (id && loading) {
        return (<h2 >Loading...</h2>);
    } else {
        return (<h2>Oops... something broke</h2>);
    }
}

export default withRouter(TattooPage);
