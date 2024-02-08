import Link from "next/link";
import PropTypes from "prop-types";

const Button = ({
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
    </Link>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  isRedirected: PropTypes.bool,
  children: PropTypes.node,
  styleLink: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
