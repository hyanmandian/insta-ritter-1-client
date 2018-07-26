import React from 'react';
import CameraIcon from 'react-icons/lib/fa/camera-retro';
import { Link } from '@reach/router';

import Button from '../../../components/Button';

import { Wrapper, Inner, Title } from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Inner>
        <Link to="/">
          <Title>Insta-Ritter</Title>
        </Link>
        <Button to="/publish" icon={<CameraIcon />}>Upload</Button>
      </Inner>
    </Wrapper>
  );
}
