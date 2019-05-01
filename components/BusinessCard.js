import PropTypes from "prop-types";
import BusinessCardFront from "./BusinessCardFront";
import BusinessCardBack from "./BusinessCardBack";

const BusinessCard = ({ isHover, onHover, onRoll })=> (
  <div className="wrapper">
    <BusinessCardFront
      isHover={isHover}
      onHover={onHover}
      onRoll={onRoll}
    />
    <BusinessCardBack onRoll={onRoll} />
  </div>
)

BusinessCard.protoTypes = {
  isHover: PropTypes.bool.isHover,
  onHover: PropTypes.func.isRequired,
  onRoll: PropTypes.func.isRequired,
}

export default BusinessCard;
