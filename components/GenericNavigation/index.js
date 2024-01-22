import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { navigationItems } from "@/constants/homeNavItems";

const GenericNavigation = ({ className, linkClassName }) => {
  const renderNavigationList = (linkClassName) => {
    return navigationItems.map((item) => (
      <li key={uuidv4()} className="nav-item">
        <Link href={item.link} className={linkClassName}>
          {item.text}
        </Link>
      </li>
    ));
  };

  return <ul className={className}>{renderNavigationList(linkClassName)}</ul>;
};

GenericNavigation.propTypes = {
  className: PropTypes.string.isRequired,
  linkClassName: PropTypes.string.isRequired,
};

export default GenericNavigation;
