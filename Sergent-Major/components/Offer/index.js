import React from "react";
import CopyCode from "../CopyCode";
import PropTypes from "prop-types";
import parse from "html-react-parser";

const Offer = ({ title, subtitle }) => {
  return (
    <section className="Offer">
      <div className="Offer-content">
        <h2 className="Offer-title">{title}</h2>
        <h3 className="Offer-subtitle">{parse(subtitle)}</h3>
        <CopyCode
          title="sur la sélection JSM avec le code**"
          copyLabel="Cloquer pour copier"
        />
      </div>
    </section>
  );
};

Offer.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Offer;
