import PropTypes from "prop-types";

const Button = (props) => {
  const { type, buttonText, classColor, classSize, onClick } = props;

  return (
    <button
      type={type}
      className={`${classColor} ${classSize}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  classColor: PropTypes.string,
  classSize: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["submit", "button"]),
};

Button.defaultProps = {
  classColor: "",
  type: "button",
};

export default Button;
