import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Form from './Form';

import Loader from '../../components/Loader';
import { Container } from './styles';

class Publish extends PureComponent {
  handleSubmit = async values => {
    return this.props.dispatch.publish.publish(values);
  }

  render() {
    const { loading } = this.props.publish;

    return (
      <Container>
        <Loader show={loading} />
        <Form onSubmit={this.handleSubmit}/>
      </Container>
    );
  }
}

const mapState = state => ({ publish: state.publish });

const mapDispatch = dispatch => ({ dispatch });

export default connect(mapState, mapDispatch)(Publish);
