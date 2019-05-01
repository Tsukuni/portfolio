const SwitchIcon = ({ mainIcon, subIcon, isHover, onHover })=> (
  <img
    src={ isHover ? subIcon : mainIcon }
    onMouseEnter={onHover}
    onMouseLeave={onHover}
    className="businessCard__profileIcon"
  />
)

export default SwitchIcon;