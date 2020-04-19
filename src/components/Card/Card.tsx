import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  isMobile?: boolean;
}

const Card: React.FC<Props> = ({ children, isMobile = false }) => (
  <Container isMobile={isMobile}>{children}</Container>
);

const Container = styled.div<{ isMobile: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);

  width: ${({ isMobile }) => (isMobile ? '320px' : '780px')};
  height: ${({ isMobile }) => (isMobile ? '450px' : '420px')};
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  box-sizing: border-box;
  background-color: rgb(251, 242, 229);
  padding: 28px;
`;

export default Card;
