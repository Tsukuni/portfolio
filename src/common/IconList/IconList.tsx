import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const IconList: React.FC<Props> = ({ children }) => (
  <Container>{children}</Container>
);

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  svg {
    font-size: 21px;
  }
  a {
    color: black;
    display: inline-block;
    width: 50px;
    text-decoration: none;
    &:visited {
      color: black;
    }
  }
`;

export default IconList;
