// Components
import Navigation from "./Navigation";

// Stylings
import layoutStyles from "@styles/components/Layout.module.scss";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
      <div className={layoutStyles.container}>
        <Navigation />
        {children}
        <Footer />
      </div>
  );
};

export default Layout;
