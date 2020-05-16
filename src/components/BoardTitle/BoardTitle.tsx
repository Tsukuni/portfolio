import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export const BoardTitle: React.FC<Props> = ({ children }) => (
  <Title>{children}</Title>
);

const Title = styled.h1`
  display: inline-block;
  font-size: 64px;
  font-weight: bold;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 64px;
  margin: auto;
  text-align: center;
  position: absolute;
`;
