import React, { PureComponent } from "react";

import isValidImage from "../../utils/isValidImage";

import { Wrapper, Input, Text, Image } from "./styles";

export default class File extends PureComponent {
  state = {
    name: "",
    type: "",
    uri: ""
  };

  handleChange = (event) => {
    event.persist();

    const file = event.target.files && event.target.files[0] ? event.target.files[0] : null;

    if (!file) return;

    this.setState(state => ({ ...state, ...file }));

    if (!isValidImage(file.type)) {
      this.props.onChange && this.props.onChange(event);
    }

    const reader = new FileReader();

    reader.onload = ({ target: { result } }) => {
      this.setState(state => ({ ...state, uri: result }));

      this.props.onChange && this.props.onChange({
        target: {
          name: event.target.name,
          value: result,
        },
      });
    };

    reader.readAsDataURL(file);
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
