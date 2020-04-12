import * as React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

interface Props {
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => (
  <Container>{children}</Container>
);

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);

  width: 900px;
  height: 520px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  box-sizing: border-box;
  background-color: rgb(251, 242, 229);
  padding: 28px;

  ${media.lessThan('medium')`
    width: 400px;
    height: 600px;
    flex-wrap: wrap;
  `}

  ${media.lessThan('small')`
    width: 320px;
    height: 500px;
    flex-wrap: wrap;
    font-size: 0.8em;
  `}
`;

export default Card;
