import PropTypes from "prop-types";
import parse from "html-react-parser";
import Arrow from "../Arrow";
import Image from "next/image";

const Header = ({ imgCover = "", title, paragraph, logoHeight, logoWidth }) => {
  return (
    <header className="Header">
      <div className={imgCover}>
        <figure className="Header-logo">
          <Image
            className="Header-img"
            src="/Mask.png"
            alt="Header-logo"
            height={logoHeight}
            width={logoWidth}
            priority
          />
        </figure>
        <div className="Header-container ">
          <div className="Header-content">
            <h1 className="Header-title">{title}</h1>
            <p className="Header-paragraph">{parse(paragraph)}</p>
            <Arrow img="/Arrows.png" height={40} width={33} />
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  imgCover: PropTypes.string,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  logoHeight: PropTypes.number.isRequired,
  logoWidth: PropTypes.number.isRequired,
};

export default Header;
