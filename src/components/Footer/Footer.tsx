import * as React from 'react';
import styled from 'styled-components';

export const Footer: React.FC<{}> = () => (
  <Container>
    <span>© 2020 tsukunin.com</span>
  </Container>
);

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 300px;
  color: #fff;
  text-align: center;
  span {
    position: absolute;
    display: block;
    bottom: 40px;
    right: 0;
    left: 0;
    margin: auto;
    width: 200px;
  }
`;
