// Content
import { StoreSection } from "types";
import React, { useState, useEffect, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import classNames from "classnames";
import "./Content.scss";

import ModalSwitch from "components/commons/ModalSwitch";
import StoreContext from "apis/StoreContext";
import TattooPageModal from "components/TattooPage/Modal";
import About from "./About";
import Home from "./Home";
import Cart from "./Cart";
import Section from "./Section";
import { StoreItem } from "types";

type Props = {
    className?: string;
};

const Content : React.FC<Props> = (props) => {
    const [sections, setSections] = useState([] as StoreSection[]);
    const {getSections} = useContext(StoreContext);
    useEffect(() => {
        getSections().then((sections) => setSections(sections))
    }, [getSections])
    return (
        <div
            className={classNames("content", props.className)}
            >
            <ModalSwitch
                switchChildren={[
                        <Route
                            exact path="/"
                            render = {() => <Home sections={sections.slice(0,3)}/>}
                        />,
                        <Route
                            path="/about"
                            component={About}
                        />,
                        <Route
                            path="/cart"
                            component={Cart}
                        />,
                        <Route
                            path="/section/:id"
                            render={({match}) => {
                                if (match.params.id)
                                    return (
                                        <SectionPage
                                            sectionId={match.params.id}
                                        />
                                    );
                                return <Redirect to="/" />;
                            }}
                        />,
                        <Route render={() => <Redirect to="/" />} />
                ]}
                modalRoute={
                    <Route path="/tattoo/:id" render={props =>
                        <TattooPageModal {...props} className="content__tattoo-modal" />
                    }/>
                }
            />
        </div>
    );
}

const SectionPage : React.FC<{sectionId: string}> = ({sectionId}) => {
    const [section,setSection] = useState<StoreSection | null>(null);
    const [items,setItems] = useState<StoreItem[]>([]);
    const [loaded,setLoaded] = useState(false);

    const { findSection, getItems } = useContext(StoreContext);

    useEffect(() => {
        findSection(sectionId)
            .then((section) => {
                if (section) {
                    setSection(section);
                    return getItems(section);
                } else {
                    setLoaded(true);
                    return [];
                }
            })
            .then((items) => {
                setItems(items);
                setLoaded(true);
            })
    }, [sectionId, findSection, getItems]);

    if (loaded && section && items.length){
        return (<div className="content__inner">
            <Section
                className="content__section"
                title={section.title}
                items={items}
                />
        </div>)
    } else if (loaded && !section) {
        return (<div className="content__inner">
            <h2>Not found</h2>
        </div>)
    } else {
        return (<div className="content__inner">
            <h2>Loading...</h2>
        </div>)
    }
};

export default Content;
