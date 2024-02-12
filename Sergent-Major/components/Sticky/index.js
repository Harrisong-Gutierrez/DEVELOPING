import Button from "../Button";

const Sticky = ({ text }) => {
  return (
    <div className="Sticky">
      <div className="Sticky-content">
        <p className="Sticky-text">{text}</p>
        <Button styleLink="Sticky-button" href="/" textContent="J'en profite" />
      </div>
    </div>
  );
};

export default Sticky;
