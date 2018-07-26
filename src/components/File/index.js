import React, { PureComponent } from 'react';

import { Wrapper, Input, Text, Image } from './styles';

export default class File extends PureComponent {
  render() {
    const { className } = this.props;

    return (
      <Wrapper className={className}>
        <Input type="file" />
        <Text>Click here to select your photo</Text>
      </Wrapper>
    );
  }
};
