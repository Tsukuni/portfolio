import * as React from 'react';
import styled from 'styled-components';

interface Props {
  onClickUp?: () => void;
  onClickDown?: () => void;
  isMobile?: boolean;
}

const ScrollButton: React.FC<Props> = ({
  onClickUp,
  onClickDown,
  isMobile = false
}) => (
  <Container isMobile={isMobile}>
    <UpTriangle onClick={onClickUp} disable={onClickUp ? false : true} />
    <DownTriangle onClick={onClickDown} disable={onClickDown ? false : true} />
  </Container>
);

const Container = styled.div<{ isMobile: boolean }>`
  position: absolute;
  bottom: ${({ isMobile }) => (isMobile ? '28px' : '40px')};
  right: ${({ isMobile }) => (isMobile ? '32px' : '50px')};
`;

const UpTriangle = styled.div<{ disable: boolean }>`
  width: 0px;
  height: 0px;
  border-right: 13px solid transparent;
  border-bottom: ${({ disable }) =>
    disable ? '20px solid gray' : '20px solid #133b1c'};
  border-left: 13px solid transparent;
  &:hover {
    border-bottom: ${({ disable }) =>
      disable ? '20px solid gray' : '20px solid rgba(19, 59, 28, 0.5)'};
  }
  cursor: pointer;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.6));
  margin-bottom: 8px;
`;

const DownTriangle = styled.div<{ disable: boolean }>`
  width: 0px;
  height: 0px;
  border-right: 13px solid transparent;
  border-top: ${({ disable }) =>
    disable ? '20px solid gray' : '20px solid #133b1c'};
  border-left: 13px solid transparent;
  &:hover {
    border-top: ${({ disable }) =>
      disable ? '20px solid gray' : '20px solid rgba(19, 59, 28, 0.5)'};
  }
  cursor: pointer;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.6));
`;

export default ScrollButton;
