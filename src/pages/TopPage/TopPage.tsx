import * as React from 'react';
import { MainBoard } from 'components/MainBoard';
import styled from 'styled-components';

export const TopPage = () => (
  <MainBoard>
    <Title>ようこそ!!!!!!!</Title>
  </MainBoard>
);

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 340px;
  height: 48px;
  margin: auto;
  position: absolute;
`;
