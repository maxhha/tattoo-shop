// Content
import { StoreSection } from "types";
import React, { useState, useEffect, useContext } from "react";
import {Route, Switch} from "react-router-dom";
import classNames from "classnames";
import "./Content.scss";

import StoreContext from "apis/StoreContext";
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
            <Switch>
                <Route
                    exact path="/"
                    render = {() => <Home sections={sections.slice(0,3)}/>}
                />
                <Route
                    path="/about"
                    component={About}
                />
            </Switch>
        </div>
    );
}

export default Content;
