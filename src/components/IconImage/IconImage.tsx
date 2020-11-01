import * as React from 'react';
import styled, { css } from 'styled-components';

interface Position {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

interface Props {
  icon: string;
  size: number;
  position: Position;
  locate?: number;
  className?: string;
}

export const IconImage: React.FC<Props> = ({
  icon,
  size,
  position,
  locate = 0,
  className = '',
}) => (
  <Image
    src={icon}
    size={size}
    position={position}
    locate={locate}
    className={className}
  />
);

const Image = styled.img<{ size: number; position: Position; locate: number }>`
  ${({ size, position, locate }) => {
    return css`
      width: ${size}px;
      height: ${size}px;
      position: absolute;
      -moz-transform: rotate(${locate}deg);
      -webkit-transform: rotate(${locate}deg);
      -o-transform: rotate(${locate}deg);
      -ms-transform: rotate(${locate}deg);
      transform: rotate(${locate}deg);
      ${position.top !== undefined && `top: ${position.top}px`};
      ${position.left !== undefined && `left: ${position.left}px`};
      ${position.right !== undefined && `right: ${position.right}px`};
      ${position.bottom !== undefined && `bottom: ${position.bottom}px`};
      @media screen and (max-width: 767px) {
        width: ${size / 2}px;
        height: ${size / 2}px;
      }
    `;
  }}
`;
