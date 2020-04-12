import * as React from 'react';
import IconList from '../../../../components/IconList';
import AnchorIcon from '../../../../components/AnchorIcon';
import {
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

const SnsIconList: React.FC<{}> = () => (
  <IconList>
    <AnchorIcon link="https://twitter.com/tteooiyry" icon={faTwitter} />
    <AnchorIcon link="https://www.facebook.com/tteooi.ryry" icon={faFacebook} />
    <AnchorIcon
      link="https://www.instagram.com/tteooiyry/?hl=ja"
      icon={faInstagram}
    />
    <AnchorIcon link="https://github.com/Tsukuni" icon={faGithub} />
  </IconList>
);

export default SnsIconList;
