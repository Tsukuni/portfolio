import * as React from 'react';
import AnchorIcon from 'common/AnchorIcon';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const SnsIconList: React.FC<{}> = () => (
  <Container>
    <AnchorIcon link="https://twitter.com/tsukunin" icon={faTwitter} />
    <AnchorIcon
      link="https://www.instagram.com/_tsukunin/?hl=ja"
      icon={faInstagram}
    />
  </Container>
);

const Container = styled.div`
  width: 150px;
  margin: auto;
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

export default SnsIconList;
