import Button from "../Button";
import parse from "html-react-parser";

const Sticky = ({ text }) => {
  return (
    <div className="Sticky">
      <div className="Sticky-main">
        <div className="Sticky-content">
          <p className="Sticky-text">{parse(text)}</p>
          <Button
            styleLink="Sticky-button"
            href="/"
            textContent="J'en profite"
          />
        </div>
      </div>
    </div>
  );
};

export default Sticky;
