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

export default Content;
