import * as React from 'react';
import AnchorIcon from '../../../../components/AnchorIcon';
import {
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const SnsIconList: React.FC<{}> = () => (
  <Container>
    <AnchorIcon link="https://twitter.com/tteooiyry" icon={faTwitter} />
    <AnchorIcon link="https://www.facebook.com/tteooi.ryry" icon={faFacebook} />
    <AnchorIcon
      link="https://www.instagram.com/tteooiyry/?hl=ja"
      icon={faInstagram}
    />
    <AnchorIcon link="https://github.com/Tsukuni" icon={faGithub} />
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
