import { useState } from "react";
import Button from "../Button";
import PropTypes from "prop-types";
import { FaRegCopy } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import CopyToClipboard from "react-copy-to-clipboard";

const CopyCodeBox = ({ text }) => {
  const [isTextCopied, setIsTextCopied] = useState(false);
  const handleCopyText = () => {
    setIsTextCopied(true);
  };
  return (
    <CopyToClipboard text={text}>
      <Button
        onClick={handleCopyText}
        text={text}
        href="/"
        isRedirected={false}
        styleLink="Offer-copyBox"
      >
        <>
          {text}
          {isTextCopied ? <FaCopy /> : <FaRegCopy />}
        </>
      </Button>
    </CopyToClipboard>
  );
};

CopyCodeBox.propTypes = {
  text: PropTypes.string,
};

export default CopyCodeBox;
