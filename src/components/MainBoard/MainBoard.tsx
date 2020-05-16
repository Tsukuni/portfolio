import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export const MainBoard: React.FC<Props> = ({ children }) => (
  <Container>
    <WhiteBoard>{children}</WhiteBoard>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 100px 50px;
  box-sizing: border-box;
  @media screen and (max-width: 767px) {
    padding: 100px 25px;
  }
`;

const WhiteBoard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
`;
