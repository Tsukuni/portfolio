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
  height: calc(100vh - 100px);
  padding: 0px 50px 100px;
  box-sizing: border-box;
`;

const WhiteBoard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
`;
