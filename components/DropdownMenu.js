import Link from "next/link";

import dropdownStyles from "@styles/components/Dropdown.module.scss";
import classNames from "classnames";

const DropdownMenu = ({ className, listOfLinks }) => {
  const drawerCla = classNames([dropdownStyles.drawer, className]);

  const dropdownCla = classNames([
    dropdownStyles.dropdown,
    className,
  ]);

  const linksCla = classNames([dropdownStyles.links, className]);

  return (
    <div className={drawerCla}>
      {
        <ul className={dropdownCla}>
          {listOfLinks.map((element, index) => (
            <li key={index}>
              <Link href={element["link"]}>
                <a className={linksCla}>{element["title"]}</a>
              </Link>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default DropdownMenu;
