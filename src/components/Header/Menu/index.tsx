// Menu
import React, {useState, useEffect, createRef} from 'react';
import classNames from "classnames";
import "./Menu.scss";

type Props = {
    className?: string,
    children: ((hide: () => void) => (React.ReactElement | {key: any}))[],
    title: string
}

const Menu : React.SFC<Props> = (props) => {

    const [menuVisible, setMenuVisibility] = useState(false);
    const refMenu = createRef<HTMLDivElement>()

    useEffect(() => {
        const handleClick = (e : Event) => {
            if (e.target && refMenu.current && !refMenu.current.contains(e.target as Node))
                setMenuVisibility(false)
        };
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }
    })

    const hide = () => setMenuVisibility(false)

    return (
        <div className={classNames("menu", props.className)} ref={refMenu}>
            <div className="menu__title" onClick={()=>setMenuVisibility(true)}>{props.title}</div>
            <ul className={classNames("menu__popup-list", {'menu__popup-list_active':menuVisible})}>
                {props.children.map((f) => {
                    let el = f(hide);
                    return (<li className="menu__item" key={el.key}>
                        {el}
                    </li>)
                })}
            </ul>
        </div>
    );
};

export default Menu;
