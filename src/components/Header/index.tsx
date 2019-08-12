// Header
import React from 'react';
import { Route } from 'react-router-dom';
import LinkButton from 'components/commons/LinkButton';
import Menu from "./Menu";
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
                <Menu className="nav__menu" title="Категроии">
                    {sections.map(({id, title}) => (hide : () => void, hidden: boolean) =>
                            <LinkButton
                                to={`/section/${id}`}
                                className="nav__button nav__menu-item"
                                key={id}
                                onClick={hide}
                                disabled={hidden}
                            >{title}</LinkButton>
                    )}
                </Menu>
                <LinkButton to='/about' className="button nav__button">О нас</LinkButton>
                <button className="button nav__button">Контакты</button>
            </nav>
            <Route render={({history})=>
                <img
                    className="header__logo"
                    onClick={() => history.push('/')}
                    src={logo}
                    alt="Logo"
                />
            }/>
            <nav className="nav header__side header__nav">
                <LinkButton to='/cart' className="button nav__button">Корзина</LinkButton>
                <button className="button nav__button">Оплата</button>
                <button className="button nav__button">Доставка</button>
            </nav>
        </header>
    );
};

export default Header;
