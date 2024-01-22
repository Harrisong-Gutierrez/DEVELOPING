import PropTypes from "prop-types";
import Image from "next/image";
import { CardImg } from "@/routes/cardpath";

const Card = (props) => {
  const {
    thumbnailPathUrl,
    thumbnailExtensionUrl,
    type,
    series,
    description,
    alt,
    name,
    modified,
    width,
    height,
  } = props;

  const imgUrl =
    thumbnailPathUrl && thumbnailExtensionUrl
      ? `${thumbnailPathUrl}.${thumbnailExtensionUrl}`
      : `${CardImg}`;

  console.log();
  return (
    <div className="Card">
      <Image
        className="Card-img Card-inside"
        width={width}
        height={height}
        src={imgUrl}
        alt={alt}
      />
      <h3 className="Card-title Card-inside">{name}</h3>
      <div className="Card-text Card-inside">
        <time dateTime="2018-07-07">{modified}</time>
        <p>{description}</p>
        <h5>{series}</h5>
        <span>{type}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  series: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  modified: PropTypes.string,
  description: PropTypes.string,
};

Card.defaultProps = {
  series: "",
  type: "",
  modified: "",
  description: "",
};

export default Card;
