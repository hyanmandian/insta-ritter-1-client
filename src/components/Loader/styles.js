import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .7);
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  visibility: hidden;
  opacity: 0;

  ${({ show }) => show && css`
    opacity: 1;
    visibility: visible;
  `}
`;

export const Text = styled.p`
  font-size: 48px;
  margin: 0;
  color: #fff;
  text-transform: uppercase;
`;
