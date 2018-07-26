import React, { Fragment } from 'react';
import { Link } from '@reach/router';

import { Wrapper } from './styles';

export default function Button({ children, icon, ...props }) {
  const Component = props.to ? Wrapper.withComponent(Link) : Wrapper;

  return (
    <Component {...props}>
      {icon && <Fragment>{icon}</Fragment>}
      {children}
    </Component>
  );
}
