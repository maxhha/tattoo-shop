import React from "react";
import { RouteChildrenProps, Redirect } from "react-router";
import classNames from "classnames";
import {RemoveScroll} from "react-remove-scroll";

import "./Modal.scss";
import TattooPage from "components/TattooPage";

interface Props extends RouteChildrenProps<{id: string}> {
    className?: string
}

const TattooPageModal : React.FC<Props> = (props) => {

    const params = props.match && props.match.params;
    if (params && params.id) {
        return (<div className={classNames("tattoo-modal", props.className, RemoveScroll.classNames.fullWidth)} onClick={(e) => {
            e.stopPropagation();
            props.history.goBack();
        }}>
                <RemoveScroll className="tattoo-modal__inner"><TattooPage /> </RemoveScroll>
            </div>);
    } else {
        return <Redirect to="/" />;
    }
}

export default TattooPageModal;
