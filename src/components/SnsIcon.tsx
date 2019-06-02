import * as React from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const SnsIcon = () => (
  <div className="businessCard__snsIconBox">
    <a href="https://twitter.com/tteooiyry">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a href="https://www.facebook.com/tteooi.ryry">
      <FontAwesomeIcon icon={faFacebook} />
    </a>
    <a href="https://www.instagram.com/tteooiyry/?hl=ja">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a href="https://github.com/Tsukuni">
      <FontAwesomeIcon icon={faGithub} />
    </a>
  </div>
)

export default SnsIcon;
