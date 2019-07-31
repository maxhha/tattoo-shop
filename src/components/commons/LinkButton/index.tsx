import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import * as H from "history";

interface LinkButtonProps extends RouteComponentProps<any>, React.ButtonHTMLAttributes<HTMLButtonElement> {
    to: H.LocationDescriptor;
    replace?: boolean;
    innerRef?: React.Ref<HTMLAnchorElement>;
}

const LinkButton : React.FC<LinkButtonProps> = (props) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    replace,
    // ⬆ filtering out props that 'button' doesnt know what to do with.
    ...rest
  } = props
  return (
    <button
      {...rest} // 'children' is just another prop!
      onClick={(event) => {
        onClick && onClick(event);
        const method = replace ? history.replace : history.push;
        method(to as any) // rude fix of some type casting bug
      }}
    />
  )
}

export default withRouter(LinkButton);
