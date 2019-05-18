interface Props {
  mainIcon: string;
  subIcon: string;
  isHover: boolean;
  onHover: () => void;
}
const SwitchIcon = (props: Props)=> (
  <img
    src={ props.isHover ? props.subIcon : props.mainIcon }
    onMouseEnter={props.onHover}
    onMouseLeave={props.onHover}
    className="businessCard__profileIcon"
  />
)

export default SwitchIcon;
