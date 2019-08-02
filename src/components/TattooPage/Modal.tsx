import React from "react";
import { RouteChildrenProps, Redirect } from "react-router";
import classNames from "classnames";

import "./Modal.scss";
import TattooPage from "components/TattooPage";

interface Props extends RouteChildrenProps<{id: string}> {
    className?: string
}

const TattooPageModal : React.FC<Props> = (props) => {

    const params = props.match && props.match.params;
    if (params && params.id) {
        return (<div className={classNames("tattoo-modal", props.className)} onClick={(e) => {
            e.stopPropagation();
            props.history.goBack();
        }}>
                <TattooPage />
            </div>);
    } else {
        return <Redirect to="/" />;
    }
}

export default TattooPageModal;
