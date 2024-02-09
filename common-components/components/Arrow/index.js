import Image from "next/image";
import PropTypes from "prop-types";

const Arrow = ({ img = "", height, width }) => {
  return (
    <Image
      alt="arrow-image"
      className="Arrow-img"
      src={img}
      height={height}
      width={width}
    />
  );
};

Arrow.propTypes = {
  img: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Arrow;
