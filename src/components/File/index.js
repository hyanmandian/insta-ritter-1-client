import React, { PureComponent } from 'react';

import isValidImage from '../../utils/isValidImage';

import { Wrapper, Input, Text, Image } from './styles';

export default class File extends PureComponent {
  state = {
    file: null,
  };

  handleChange = (event) => {
    event.persist();

    if (!event.target.files || !event.target.files[0]) return;

    this.setState((state) => ({
      ...state,
      file: event.target.files[0],
    }));

    this.props.onChange && this.props.onChange(event);
  }

  renderPreview() {
    const { file } = this.state;

    if (file && isValidImage(file.type)) {
      return (
        <Image src={URL.createObjectURL(file)} alt="Preview image" />
      );
    }

    return (
      <Text>{ file ? file.name : 'Click here to select your file' }</Text>
    );
  }

  render() {
    const { className, onChange, ...props } = this.props;

    return (
      <Wrapper className={className}>
        <Input type="file" onChange={this.handleChange} {...props} />
        {this.renderPreview()}
      </Wrapper>
    );
  }
};
