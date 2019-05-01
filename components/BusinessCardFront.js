import PropTypes from "prop-types";
import SwitchIcon from "./SwitchIcon";
import SnsIcon from "./SnsIcon";
import Button from "./Button";
import icon from "../static/images/icon.jpg";
import icon2 from "../static/images/icon2.jpg";

const BusinessCardFront = ({ isHover, onHover, onRoll }) => (
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
        <p>
          ハリネズミをめっちゃ飼ってるエンジニア。<br/>
          よくわかりませんが会社ではハリネズミハンターと呼ばれています。<br/>
          <br/>
          一緒に魚釣り・スプラトゥーンできる人探してます。
        </p>
      </div>
      <Button onClick={onRoll}>ウラも見てね</Button>
    </div>
  </div>
)

BusinessCardFront.protoTypes = {
  isHover: PropTypes.bool.isHover,
  onHover: PropTypes.func.isRequired,
  onRoll: PropTypes.func.isRequired,
}

export default BusinessCardFront;
