// Libraries
import Link from "next/link";

// Styling
import navStyles from "@styles/components/Navigation.module.scss";

const Navigation = ({}) => {
  return (
    <nav className={navStyles.nav}>
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
      <div className={navStyles.divider}></div>
    </nav>
  );
};

export default Navigation;
