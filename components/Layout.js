// Next
import Image from "next/image";

// Components
import Navigation from "./Navigation";

// Stylings
import layoutStyles from "@styles/components/Layout.module.scss";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <Image
        className={layoutStyles.backgroundImg}
        alt="Background"
        src="/images/background.png"
        layout="fill"
        objectFit="cover"
      />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
