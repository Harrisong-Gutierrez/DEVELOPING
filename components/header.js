import GenericNavigation from "./genericNavigation";
import Image from "next/image";

const Header = () => {
  const navLinks = [
    { text: "CHARACTERS", link: "#" },
    { text: "COMICS", link: "#" },
    { text: "STORIES", link: "#" },
    { text: "FAVORITES", link: "#" },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <Image
            src="/logo-m.png"
            alt="Logo"
            width={150}
            height={80}
            priority
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <GenericNavigation
            items={navLinks}
            className="navbar-nav"
            linkClassName="nav-link active text-white"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
