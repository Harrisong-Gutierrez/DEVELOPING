import Footer from "../Footer";
import PropTypes from "prop-types";
import Header from "../Header";

const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <Header />
      <div className="Banner-image" />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
