import PropTypes from 'prop-types';

const SwitchIcon = ({ mainIcon, subIcon, isHover, onHover })=> (
  <img
    src={ isHover ? subIcon : mainIcon }
    onMouseEnter={onHover}
    onMouseLeave={onHover}
    className="businessCard__profileIcon"
  />
)

SwitchIcon.propTypes = {
  mainIcon: PropTypes.string.isRequired,
  subIcon: PropTypes.string.isRequired,
  isHover: PropTypes.bool.isRequired,
  onHover: PropTypes.func.isRequired
}

export default SwitchIcon;
