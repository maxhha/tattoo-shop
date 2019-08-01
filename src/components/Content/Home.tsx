import { StoreSection, StoreItem } from "types";
import React, { useState, useEffect, useContext } from "react";

import StoreContext from "apis/StoreContext";
import Section from "./Section";

type HomeProps = {
    sections: StoreSection[],
}

const Home : React.FC<HomeProps> = ({ sections }) => {
    const [items, setItems] = useState([] as StoreItem[][]);

    const { getItems } = useContext(StoreContext);

    useEffect(() => {
        Promise.all(sections.map((section) => getItems(section)))
            .then((loadedItems) => setItems(loadedItems));
    }, [sections, getItems])

    return (
        <div className="content__inner">
            <div className="face-image">
                <div className="face-image__title">
                    КРУТЫЕ ТАТУХИ ДЕЛАЮТ ТЕБЯ КРУТЫМ!
                </div>
            </div>
            {items.length > 0 && sections.map(({id, title}, i) =>
                <Section
                    className="content__section"
                    title={title}
                    key={id}
                    items={items[i].slice(0,8)}
                />
            )}
        </div>
    );
}

export default Home;
