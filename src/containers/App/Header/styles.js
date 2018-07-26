import styled from 'styled-components';

import Container from '../../../components/Container';

export const Inner = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.header`
  padding: 20px 0;
  text-align: center;
  background: #fff;
  border-bottom: solid 1px #dbdbdb;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin: 0;
`;
