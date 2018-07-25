import React from 'react';
import { parse, distanceInWords } from 'date-fns';

import { Wrapper, Image, Time, Info, Title } from './styles';

export default function Photo({ title, src, time }) {
  return (
    <Wrapper>
      <Image src={src} alt={title} />
      <Info>
        <Time dateTime={time}>{distanceInWords(parse(time), new Date())}</Time>
        <Title>{title}</Title>
      </Info>
    </Wrapper>
  );
}
