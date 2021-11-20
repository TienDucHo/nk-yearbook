// Styling
import footerStyles from "@styles/components/Footer.module.scss";

// Icons
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = ({}) => {
  return (
    <div className={footerStyles.container}>
      <div className={footerStyles.columns}>
        <h5 className={footerStyles.title}>Liên hệ</h5>
        <p>0903735746 (Ms. An Nguyen)</p>
        <p>0924221089 (Ms. Quan Vu)</p>
        <p>info@ptnk.me</p>
        <a href="https://www.facebook.com/profile.php?id=100010201812366">
          <FontAwesomeIcon
            icon={faFacebook}
            className={footerStyles.icon}
          />
        </a>
      </div>
      {/* <div className={footerStyles.columns}>
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
      </div> */}
    </div>
  );
};

export default Footer;
