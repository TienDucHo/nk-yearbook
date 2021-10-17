// Libraries
import Link from "next/link";
import Image from "next/image";

// Styling
import navStyles from "@styles/components/Navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Navigation = ({}) => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.logo}>
        <Image
          src="/images/icons.jpg"
          width={100}
          height={100}
          alt="PTNK Alumni Icon"
        ></Image>
      </div>
      <ul className={navStyles.lists}>
        <li className={navStyles.listItems}>
          <Link href="/">
            <a className={navStyles.links}>About PTNK</a>
          </Link>
        </li>
        <li className={navStyles.listItems}>
          <Link href="/yearbooks">
            <a className={navStyles.links}>Yearbooks</a>
          </Link>
        </li>
        <li className={navStyles.listItems}>
          <Link href="/events">
            <a className={navStyles.links}>Events</a>
          </Link>
        </li>
        <li className={navStyles.listItems}>
          <Link href="/contact">
            <a className={navStyles.links}>Contact us</a>
          </Link>
        </li>
      </ul>
      <ul className={navStyles.lists}>
        <li className={navStyles.listItems}>
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </li>
        <li className={navStyles.listItems}>
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </li>
        <li className={navStyles.listItems}>
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
