import { useState } from "react";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import Button from "@/components/Button";

const CopyCodeBox = ({ text, onClick }) => {
  const [isTextCopied, setIsTextCopied] = useState(false);

  const handleCopyText = () => {
    setIsTextCopied(true);
    onClick();
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
        {text}
        {isTextCopied ? <FaCopy /> : <FaRegCopy />}
      </Button>
    </CopyToClipboard>
  );
};

CopyCodeBox.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CopyCodeBox;
