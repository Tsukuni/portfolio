import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: auto;
`;

export default Container;
