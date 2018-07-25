import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import Container from '../../components/Container';
import Photo from './Photo';

class Home extends PureComponent {
  componentDidMount() {
    this.props.dispatch.photos.fetch();
  }

  renderPhotos() {
    const { loading, data } = this.props.photos;

    if (loading) return "Loading...";

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
    return (
      <Container>
        {this.renderPhotos()}
      </Container>
    );
  }
}

const mapState = state => ({ photos: state.photos });

const mapDispatch = dispatch => ({ dispatch });

export default connect(mapState, mapDispatch)(Home);
