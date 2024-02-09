import Link from "next/link";
import PropTypes from "prop-types";

const Button = ({
  textContent,
  onClick,
  href,
  isRedirected = true,
  children,
  styleLink,
}) => {
  const handleClick = (event) => {
    if (!isRedirected) event.preventDefault();
    onClick();
  };

  return (
    <Link className={styleLink} href={href} onClick={handleClick}>
      {children}
      {textContent}
    </Link>
  );
};

Button.propTypes = {
  textContent: PropTypes.string,
  href: PropTypes.string,
  isRedirected: PropTypes.bool,
  children: PropTypes.node,
  styleLink: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
