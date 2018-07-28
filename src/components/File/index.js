import React, { PureComponent } from "react";

import isValidImage from "../../utils/isValidImage";
import fileToBase64 from '../../utils/fileToBase64';

import { Wrapper, Input, Text, Image } from "./styles";

export default class File extends PureComponent {
  state = {
    name: "",
    type: "",
    uri: ""
  };

  handleChange = async (event) => {
    event.persist();

    const file = event.target.files && event.target.files[0] ? event.target.files[0] : null;

    if (!file) return;

    const syntheticEvent = {
      target: {
        name: event.target.name,
        value: event.target.value,
      },
    };

    if (isValidImage(file.type)) {
      file.uri = await fileToBase64(file);
      syntheticEvent.target.value = file.uri;
    }

    this.setState(state => ({ ...state, ...file }));

    this.props.onChange && this.props.onChange(syntheticEvent);
  };

  renderPreview() {
    const { name, uri } = this.state;

    if (uri) {
      return <Image src={uri} alt="Preview image" />;
    }

    return <Text>{name ? name : "Click here to select your file"}</Text>;
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
}
