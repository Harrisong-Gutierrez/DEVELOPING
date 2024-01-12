import GenericNavigation from "./genericNavigation";

const Footer = () => {
  const navigationItems = [
    { text: "CHARACTERS", link: "#" },
    { text: "COMICS", link: "#" },
    { text: "STORIES", link: "#" },
    { text: "FAVORITES", link: "#" },
  ];

  return (
    <div className="container">
      <footer className="py-3 my-4">
        <GenericNavigation
          items={navigationItems}
          className="nav justify-content-center border-bottom pb-3 mb-3"
          linkClassName="nav-link px-2 text-muted"
        />
        <p className="text-center text-muted">© 2024 SMBS Company, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
