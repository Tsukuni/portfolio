import * as React from 'react';
import IconList from 'common/IconList';
import AnchorIcon from 'common/AnchorIcon';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SnsIconList: React.FC<{}> = () => (
  <IconList>
    <AnchorIcon link="https://twitter.com/tteooiyry" icon={faTwitter} />
    <AnchorIcon
      link="https://www.instagram.com/tteooiyry/?hl=ja"
      icon={faInstagram}
    />
  </IconList>
);

export default SnsIconList;
