import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const renderNavigationList = (items, linkClassName) => {
  return items.map((item) => (
    <li key={uuidv4()} className="nav-item">
      <a href={item.link} className={linkClassName}>
        {item.text}
      </a>
    </li>
  ));
};

const GenericNavigation = ({ items, className, linkClassName }) => {
  return (
    <ul className={className}>
      {items && renderNavigationList(items, linkClassName)}
    </ul>
  );
};

GenericNavigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
  linkClassName: PropTypes.string,
};

export default GenericNavigation;
