import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import Container from '../../components/Container';
import Loader from '../../components/Loader';

import Photo from './Photo';

class Home extends PureComponent {
  componentDidMount() {
    this.props.dispatch.photos.fetch();
  }

  renderPhotos() {
    const { data } = this.props.photos;

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
