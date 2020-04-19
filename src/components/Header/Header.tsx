import * as React from 'react';
import styled from 'styled-components';
import icon from '../../../public/images/header.png';

interface Props {
  isMobile?: boolean;
}

const Header: React.FC<Props> = ({ isMobile = false }) => (
  <Container>
    <Image src={icon} isMobile={isMobile} />
  </Container>
);

const Container = styled.div`
  width: 100vw;
  position: fixed;
  padding: 8px;
  top: 0;
  z-index: 100;
`;

const Image = styled.img<{ isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? '120px' : '240px')};
`;

export default Header;
