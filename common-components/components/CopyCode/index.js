import React, { useState } from "react";
import PropTypes from "prop-types";
import CopyCodeBox from "./components/CopycodeBox";

const CopyCode = ({ title, copyLabel, copiedLabel = "" }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyText = () => {
    setIsCopied(true);
  };
  return (
    <div className="CopyCode">
      <p className="CopyCode-title">{title}</p>
      <CopyCodeBox onClick={handleCopyText} text="VEEPEEJSM23" />
      <p className="CopyCode-label">{isCopied ? copiedLabel : copyLabel}</p>
    </div>
  );
};

CopyCode.propTypes = {
  title: PropTypes.string.isRequired,
  copyLabel: PropTypes.string.isRequired,
  copiedLabel: PropTypes.string,
};

export default CopyCode;
