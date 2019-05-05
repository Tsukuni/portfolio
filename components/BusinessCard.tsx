import BusinessCardFront from "./BusinessCardFront";
import BusinessCardBack from "./BusinessCardBack";

interface Props {
  isHover: boolean;
  onHover: () => void;
  onRoll: () => void;
}

const BusinessCard = (props: Props) => (
  <div className="wrapper">
    <BusinessCardFront
      isHover={props.isHover}
      onHover={props.onHover}
      onRoll={props.onRoll}
    />
    <BusinessCardBack onRoll={props.onRoll} />
  </div>
)

export default BusinessCard;
