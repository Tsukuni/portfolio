import PropTypes from "prop-types";

const Button = ({ children, onClick }) => (
  <div className="businessCard__buttonBox" onClick={onClick}>
    <span className="businessCard__button">{children}</span>
  </div>
)

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;
