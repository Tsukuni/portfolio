import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Title: React.FC<Props> = ({ children, className = '' }) => (
  <Container className={className}>{children}</Container>
);

const Container = styled.h2`
  font-weight: bold;
  color: #fff;
  font-size: 32px;
  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`;
