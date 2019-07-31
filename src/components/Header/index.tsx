// Header
import React from 'react';
import LinkButton from 'components/commons/LinkButton';
import classNames from "classnames";
import logo from "assets/images/logo.png";
import "./Header.scss";

type Props = {className?: string}

const Header : React.SFC<Props> = (props) => {
    return (
        <header className={classNames("header", props.className)}>
            <nav className="nav header__side header__nav">
                <LinkButton to='/' className="button nav__button">Категроии</LinkButton>
                <LinkButton to='/about' className="button nav__button">О нас</LinkButton>
                <button className="button nav__button">Контакты</button>
            </nav>
            <img className="header__logo" src={logo} alt={"logo"}/>
            <nav className="nav header__side header__nav">
                <button className="button nav__button">Корзина</button>
                <button className="button nav__button">Оплата</button>
                <button className="button nav__button">Доставка</button>
            </nav>
        </header>
    );
};

export default Header;
