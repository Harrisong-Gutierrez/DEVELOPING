import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const Card = (props) => {
  const { type, series, description, src, alt, name, modified, width, height } =
    props;
  return (
    <div className="Card-box">
      <div className="Card-inside">
        <Image
          className="Card-img"
          width={width}
          height={height}
          src={src}
          alt={alt}
        />
        <h3 className="Card-title">{name}</h3>
        <div className="Card-text">
          <div>{modified}</div>
          <div>{description}</div>
          <div>{series}</div>
          <div>{type}</div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  series: PropTypes.string,
  type: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Card.defaultProps = {
  series: "",
  type: "",
};
export default Card;
