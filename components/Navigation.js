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
            <a className={navStyles.links}>Trường PTNK</a>
          </Link>
        </li>
        <li className={navStyles.listItems}>
          <Link href="/yearbooks">
            <a className={navStyles.links}>Kỷ yếu</a>
          </Link>
        </li>
        <li className={navStyles.listItems}>
          <Link href="/events">
            <a className={navStyles.links}>Sự kiện</a>
          </Link>
        </li>
        <li className={navStyles.listItems}>
          <Link href="/contact">
            <a className={navStyles.links}>Liên hệ</a>
          </Link>
        </li>
      </ul>
      <span className={navStyles.divider}></span>
    </nav>
  );
};

export default Navigation;
