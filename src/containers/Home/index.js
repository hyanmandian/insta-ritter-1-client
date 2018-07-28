import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import Masonry from 'react-masonry-component';

import Container from '../../components/Container';
import Loader from '../../components/Loader';

import Photo from './Photo';

import { Message } from './styles';

class Home extends PureComponent {
  componentDidMount() {
    this.props.dispatch.photos.fetch();
  }

  renderPhotos() {
    const { data, loading } = this.props.photos;

    if (!data.length && !loading) {
      return (
        <Message>
          Ainda não temos fotinhos :( <br/> <br/>
          <Link to="/publish">Clique aqui</Link> para publicar sua primeira foto :D
        </Message>
      );
    }

    return (
      <Masonry options={{ transitionDuration: 0, gutter: 20 }}>
        {data.map((photo) => (
          <Photo
            key={photo.id}
            title={photo.title}
            src={photo.uri}
            time={photo.createdAt}
          />
        ))}
      </Masonry>
    );
  }

  render() {
    const { loading } = this.props.photos;

    return (
      <Container>
        <Loader show={loading} />
        {this.renderPhotos()}
      </Container>
    );
  }
}

const mapState = state => ({ photos: state.photos });

const mapDispatch = dispatch => ({ dispatch });

export default connect(mapState, mapDispatch)(Home);
