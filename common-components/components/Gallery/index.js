import Image from "next/image";
import PropTypes from "prop-types";

const Gallery = ({ src, height, width, alt }) => {
  return (
    <div className="Gallery">
      <figure className="Gallery-content">
        <Image
          className="Gallery-image"
          height={height}
          alt={alt}
          width={width}
          priority
          src={src}
        />
      </figure>
    </div>
  );
};

Gallery.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Gallery;
