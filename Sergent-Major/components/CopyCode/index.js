import React from "react";
import CopyCodeBox from "../CopycodeBox";
import PropTypes from "prop-types";

const CopyCode = ({ title, copyLabel, copiedLabel }) => {
  return (
    <div className="CopyCode">
      <p className="CopyCode-title">{title}</p>
      <CopyCodeBox text="VEEPEEJSM23" />
      <p className="CopyCode-label">{copyLabel}</p>
    </div>
  );
};

CopyCode.propTypes = {
  title: PropTypes.string.isRequired,
  copyLabel: PropTypes.string.isRequired,
  copiedLabel: PropTypes.string,
};

export default CopyCode;
