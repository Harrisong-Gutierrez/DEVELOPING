import Header from "../header";
import Footer from "../footer";
import Image from "next/image";
import PropTypes from "prop-types";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      <Image
        src="/banner.jpg"
        width={1910}
        height={400}
        alt="banner"
        layout="responsive"
        priority
      />
      <div className="h-auto">{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
