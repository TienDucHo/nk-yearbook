// Components
import Navigation from "./Navigation";

// Stylings
import layoutStyles from "@styles/components/Layout.module.scss";
import classNames from "classnames";

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.overlay}>
        <Navigation />
        {children}
      </div>
    </div>
  );
};

export default Layout;
