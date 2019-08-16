import * as React from 'react';
import SwitchIcon from './SwitchIcon';
import SnsIcon from './SnsIcon';
import Button from './Button';
const icon = require('../../public/images/icon.jpg');
const icon2 = require('../../public/images/icon2.jpg');

interface Props {
  isHover: boolean;
  onHover: () => void;
  onRoll: () => void;
}

const BusinessCardFront = ({ isHover, onHover, onRoll }: Props) => (
  <div className="businessCard front">
    <div className="businessCard__left">
      <div className="businessCard__iconBox">
        <SwitchIcon
          mainIcon={icon}
          subIcon={icon2}
          isHover={isHover}
          onHover={onHover}
        />
        <SnsIcon />
      </div>
      <div className="businessCard__subinfo">
        <p className="small">tamkchi.fugu@gmail.com</p>
        <p className="small">COUNTERWORKS Inc.</p>
      </div>
    </div>
    <div className="businessCard__right">
      <div className="businessCard__nameBox">
        <p className="small">ENGINEER</p>
        <h2>津國健太</h2>
        <p className="small">Kenta Tsukuni</p>
      </div>
      <div className="businessCard__profileBox">
        <span className="businessCard__profileContent">
          ハリネズミをめっちゃ飼ってるエンジニア。
          <br />
          よくわかりませんが会社ではハリネズミハンターと呼ばれています。
          <br />
          <br />
          一緒に魚釣り・スプラトゥーンできる人探してます。
        </span>
      </div>
      <Button onClick={onRoll}>ウラも見てね</Button>
    </div>
  </div>
);

export default BusinessCardFront;
