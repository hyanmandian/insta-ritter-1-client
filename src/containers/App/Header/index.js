import React from 'react';
import CameraIcon from 'react-icons/lib/fa/camera-retro';

import { Wrapper, Inner, Title } from './styles';

import Button from '../../../components/Button';

export default function Header() {
  return (
    <Wrapper>
      <Inner>
        <Title>Insta-Ritter</Title>
        <Button icon={<CameraIcon />}>Upload</Button>
      </Inner>
    </Wrapper>
  );
}
