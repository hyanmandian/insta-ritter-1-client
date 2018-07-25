import React, { Fragment } from 'react';

import { Wrapper } from './styles';

export default function Button({ children, icon }) {
  return (
    <Wrapper>
      {icon && <Fragment>{icon}</Fragment>}
      {children}
    </Wrapper>
  );
}
