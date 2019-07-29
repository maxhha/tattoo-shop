// Header
import React from 'react';
import classNames from "classnames";
import logo from "assets/images/logo.png";
import "./Header.scss";

type Props = {className?: string}

const Header : React.SFC<Props> = (props) => {
    return (
        <header className={classNames("header", props.className)}>
            <nav className="nav header__side header__nav">
                <button className="button nav__button nav__button_first">Категроии</button>
                <button className="button nav__button">О нас</button>
                <button className="button nav__button nav__button_last">Контакты</button>
            </nav>
            <img className="header__logo" src={logo} alt={"logo"}/>
            <nav className="nav header__side header__nav">
                <button className="button nav__button nav__button_first">Корзина</button>
                <button className="button nav__button">Оплата</button>
                <button className="button nav__button nav__button_last">Доставка</button>
            </nav>
        </header>
    );
};

export default Header;
