import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  link: string;
  icon: IconProp;
}

const AnchorIcon: React.FC<Props> = ({ link, icon }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={icon} />
  </a>
);

export default AnchorIcon;
