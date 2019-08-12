// Cart
import React, { useContext } from "react";
import classNames from "classnames";
import "components/commons/cart-button.scss";
import "./Cart.scss";

import { CartItem as ICartItem } from "types";
import CartContext from "components/CartContext";
import LinkButton from "components/commons/LinkButton";

const Cart : React.FC = () => {
    const [{items, price}, dispatchCart] = useContext(CartContext);

    const onHide = (item: ICartItem) =>
        dispatchCart({type: "hide", item});

    const onShow = (item: ICartItem) =>
        dispatchCart({type: "show", item});

    const onRemove = (item: ICartItem) =>
        dispatchCart({type: "remove", id: item.id});

    return (<div className="content__inner">
        <div className="seciton content__section cart">
            <h2 className="section__title">Корзина</h2>
            <div className="cart-list">
                {items.map(i =>
                    <CartItem
                        item={i}
                        onHide={onHide}
                        onShow={onShow}
                        onRemove={onRemove}
                        key={i.id}/>
                )}
            </div>
            <div className="cart__summary">
                <h2 className="cart__price">
                    Всего: {price}р
                </h2>
                <LinkButton
                    className="cart-button"
                    to="/payment"
                >Перейти к оплате</LinkButton>
            </div>
        </div>
    </div>)
}

type CartItemProps = {
    item: ICartItem;
    onRemove: (item: ICartItem) => void;
    onHide: (item: ICartItem) => void;
    onShow: (item: ICartItem) => void;
}

const CartItem : React.FC<CartItemProps> = ({item, onRemove, onHide, onShow}) => {
    return (<div className={classNames("cart-item", item.hidden && "cart-item_hidden")}>
        <div className="cart-item__image-wrapper">
            <img
                className="cart-item__image"
                src={item.imageUrl+"&auto=format&fit=crop&w=320&q=80"}
                alt="Tattoo"
            />
        </div>
        <div className="cart-item__description">
            <h2 className="cart-item__title">{item.title}</h2>
            <h3 className="cart-item__price">{item.price}р</h3>
        </div>
        <div className="cart-item__panel">
            <button
                className="cart-button cart-item__button"
                onClick={() => onRemove(item)}
            >
                Убрать
            </button>
            <button
                className="cart-button cart-item__button"
                onClick={() => item.hidden ? onShow(item) : onHide(item)}
            >
                {item.hidden ? "Показать" : "Скрыть"}
            </button>
        </div>
    </div>);
}

export default Cart;
