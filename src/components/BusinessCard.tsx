import * as React from 'react';
import BusinessCardFront from './BusinessCardFront';
import BusinessCardBack from './BusinessCardBack';

interface Props {
  isHover: boolean;
  onHover: () => void;
  onRoll: () => void;
}

const BusinessCard = ({ isHover, onHover, onRoll }: Props) => (
  <div className="wrapper">
    <BusinessCardFront
      isHover={isHover}
      onHover={onHover}
      onRoll={onRoll}
    />
    <BusinessCardBack onRoll={onRoll} />
  </div>
);

export default BusinessCard;
