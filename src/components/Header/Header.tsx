import * as React from 'react';
import styled from 'styled-components';
import icon from 'images/header.png';

export const Header: React.FC<{}> = () => (
  <Container>
    <Image src={icon} />
  </Container>
);

const Container = styled.div`
  width: 100vw;
  height: 100px;
  padding: 8px;
  box-sizing: border-box;
  text-align: center;
`;

const Image = styled.img`
  display: inline-block;
  width: 100px;
  margin: auto;
`;
