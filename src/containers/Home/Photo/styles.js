import styled from 'styled-components';

export const Wrapper = styled.figure`
  margin: 0 0 20px 0;
  border: solid 1px #dbdbdb;
  overflow: hidden;
  background: #fff;
  width: calc(50% - 10px);
`;

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.figcaption`
  font-size: 18px;
  margin-top: 10px;
`;

export const Time = styled.time`
  color: #999;
  text-transform: uppercase;
  font-size: 12px;
`;

export const Info = styled.div`
  width: 100%;
  padding: 20px;
`;
