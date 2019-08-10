// Header
import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from 'components/commons/LinkButton';
import classNames from "classnames";
import logo from "assets/images/logo.png";
import "./Header.scss";

import { StoreSection } from "types";
import StoreContext from "apis/StoreContext";

type Props = {className?: string}

const Header : React.SFC<Props> = (props) => {

    const  [sections, setSections] = React.useState([] as StoreSection[]);
    const { getSections } = React.useContext(StoreContext);
    React.useEffect(() => {
        getSections().then((s) => setSections(s))
    }, [getSections])

    return (
        <header className={classNames("header", props.className)}>
            <nav className="nav header__side header__nav">
                <div className="menu nav__menu">
                    <div className="menu__title">Категроии</div>
                    <ul className="menu__popup-list">
                        {sections.map(({title}) =>
                            <li className="menu__item">
                                <Link to="/" className="nav__menu-item" >{title}</Link>
                            </li>
                        )}
                    </ul>
                </div>
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
