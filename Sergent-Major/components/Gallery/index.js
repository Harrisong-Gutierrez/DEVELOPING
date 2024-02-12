import Image from "next/image";
import PropTypes from "prop-types";

const Gallery = ({ alt }) => {
  return (
    <section className="Gallery">
      <figure className="Gallery-content">
        <Image
          className="Gallery-image"
          height={328}
          width={328}
          alt={alt}
          priority
          src="/gallery.png"
        />
      </figure>
    </section>
  );
};

Gallery.propTypes = {
  alt: PropTypes.string.isRequired,
};

export default Gallery;
