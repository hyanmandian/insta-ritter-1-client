import styled from 'styled-components';

export const Wrapper = styled.label`
  border: 1px solid #dbdbdb;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 10px;
`;

export const Input = styled.input`
  opacity: 0;
  visibility: hidden;
  width: 0;
  height: 0;
  position: absolute;
`;

export const Text = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const Image = styled.img`
  width: 100%;
  border: 1px solid #dbdbdb;
`;
