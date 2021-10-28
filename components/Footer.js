// Styling
import footerStyles from "@styles/components/Footer.module.scss";

// Icons
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = ({}) => {
  return (
    <div className={footerStyles.container}>
      <div className={footerStyles.columns}>
        <h5 className={footerStyles.title}>Our contact</h5>
        <p>Content</p>
        <h5 className={footerStyles.title}>+84123456789</h5>
        <p>content@gmail.com</p>
        <FontAwesomeIcon
          icon={faFacebook}
          className={footerStyles.icon}
        />
      </div>
      <div className={footerStyles.columns}>
        <h5 className={footerStyles.title}>Our contact</h5>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
      </div>
      <div className={footerStyles.columns}>
        <h5 className={footerStyles.title}>
          Sign up for our newsletter
        </h5>
        <p>Your email here...</p>
      </div>
    </div>
  );
};

export default Footer;
