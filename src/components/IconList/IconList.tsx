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
  width: 100%;
  display: flex;
  justify-content: space-between;
  svg {
    font-size: 21px;
  }
  a {
    color: black;
    text-decoration: none;
    &:visited {
      color: black;
    }
  }
`;

export default IconList;
