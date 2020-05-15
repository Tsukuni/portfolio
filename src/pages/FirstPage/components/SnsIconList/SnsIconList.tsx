import * as React from 'react';
import IconList from 'common/IconList';
import AnchorIcon from 'common/AnchorIcon';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SnsIconList: React.FC<{}> = () => (
  <IconList>
    <AnchorIcon link="https://twitter.com/tsukunin" icon={faTwitter} />
    <AnchorIcon
      link="https://www.instagram.com/_tsukunin/?hl=ja"
      icon={faInstagram}
    />
  </IconList>
);

export default SnsIconList;
