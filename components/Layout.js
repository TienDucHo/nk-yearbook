// Components
import Navigation from "./Navigation";

// Stylings
import layoutStyles from "@styles/components/Layout.module.scss";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.page}>
        <Navigation />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
