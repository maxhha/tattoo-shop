//Tattoo Page
import React, { useState, useContext, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import "./TattooPage.scss";
import classNames from "classnames";
import { StoreItem } from "types";

import StoreContext from "apis/StoreContext";

interface MatchProps {
    id: string
}

interface Props extends RouteComponentProps<MatchProps> {
    className?: string
}

const TattooPage : React.FC<Props> = (props) => {
    const params = props.match && props.match.params;
    const { id } = params || {id: undefined};

    const [item, setItem] = useState(null as (StoreItem | null));
    const [loading, setLoading] = useState(true);

    const { findItem } = useContext(StoreContext);

    useEffect(() => {
        if (id)
            findItem(id).then((item) => {setItem(item); setLoading(false)});
    },[findItem, setItem, setLoading, id]);

    const isModal = (!props.location.state || !props.location.state.modal);

    if (id && !loading && item) {
        return (
            <div
                className={classNames("tattoo-page", props.className)}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="tattoo-page__image-wrapper">
                    <img
                        className="tattoo-page__image"
                        src={`${item.imageUrl}?auto=format&fit=crop&w=640&q=80`}
                        alt={item.title}
                    />
                </div>
                <div className="tattoo-page__info">
                    <h2 className="tattoo-page__title">{item.title}</h2>
                    <p className="tattoo-page__description"> Очень большое описание картинки </p>
                </div>
                {isModal && (
                    <button
                        className="tattoo-page__close"
                        onClick={(e) => {
                            e.stopPropagation();
                            props.history.goBack();
                        }}
                    />
                )}
            </div>
        );
    } else if (id && loading) {
        return (<h2 >Loading...</h2>);
    } else {
        return (<h2>Oops... something broke</h2>);
    }
}

export default withRouter(TattooPage);
