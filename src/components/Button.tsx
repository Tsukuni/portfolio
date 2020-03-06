import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => (
  <Wrapper onClick={onClick}>
    <Label>{children}</Label>
  </Wrapper>
);

const Wrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

const Label = styled.span`
  color: #1f622e;
  padding: 12px 24px;
  font-weight: 500;
  border: solid 1px #1f622e;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #1f622e;
  }
`;

export default Button;
