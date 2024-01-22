import GenericNavigation from "../GenericNavigation";

const Footer = () => (
  <div className="container">
    <footer className="py-3 my-4">
      <GenericNavigation
        className="nav justify-content-center border-bottom pb-3 mb-3"
        linkClassName="nav-link px-2 text-muted"
      />
      <p className="text-center text-muted">
        © {new Date().getFullYear()} SMBS Company, Inc
      </p>
    </footer>
  </div>
);

export default Footer;
