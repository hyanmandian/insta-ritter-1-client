import React from 'react';

import { Wrapper, Text } from './styles';

export default function Loader({ show }) {
  return (
    <Wrapper show={show}>
      <Text>Loading...</Text>
    </Wrapper>
  );
}
