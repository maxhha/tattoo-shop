import React from 'react';
import { Switch, Route, RouteComponentProps } from "react-router-dom";

interface ModalSwitchRouteProps {
    switchChildren?: React.ReactNode,
    modalRoute?: React.ReactElement<Route>
}

const ModalSwitchRoute : React.FC<ModalSwitchRouteProps> = (props) => {
    return (<Route render={routeProps =>
        <ModalSwitch {...routeProps} {...props}/>
    } />);
}

interface ModalSwitchProps extends ModalSwitchRouteProps, RouteComponentProps<any, any, any>{}

class ModalSwitch extends React.Component<ModalSwitchProps>{
    previousLocation = this.props.location;

    componentWillUpdate(nextProps : ModalSwitchProps) {
        let { location } = this.props;

        const isModal = (!location.state || !location.state.modal);

        if (
          nextProps.history.action !== "POP" &&
          isModal
        ) {
          this.previousLocation = this.props.location;
        }
    }

    render() {
        const { location, switchChildren,  modalRoute} = this.props;

        const isModal = !!(
          location.state &&
          location.state.modal &&
          this.previousLocation !== location
        ); // not initial render

        return (<div>
            <Switch
                location={isModal ? this.previousLocation : location}
                children={switchChildren}
            />
            {isModal ? modalRoute : null}
      </div>)
    }
}

export default ModalSwitchRoute;
