import Link from "next/link";

import { useContext } from "react";
import dropdownStyles from "@styles/components/Dropdown.module.scss";
import classNames from "classnames/bind";
import {
  globalStateContext,
  dispatchStateContext,
} from "../pages/_app";

const useGlobalState = () => [
  useContext(globalStateContext),
  useContext(dispatchStateContext),
];

let cx = classNames.bind(dropdownStyles);

const DropdownMenu = ({ className, listOfLinks, index }) => {
  const dropdownCla = cx({
    menu: true,
    dropdownDisplay: className,
  });

  const linksCla = dropdownStyles.links;
  const [state, dispatch] = useGlobalState();
  return (
    <ul
      className={dropdownCla}
      onMouseOver={() => {
        let navArray = state.nav;
        navArray[index] = 1;
        dispatch({ nav: navArray });
      }}
      onMouseLeave={() => {
        let navArray = state.nav;
        navArray[index] = 0;
        dispatch({ nav: navArray });
      }}
      onClick={() => {
        let navArray = state.nav;
        navArray[index] = 0;
        dispatch({ nav: navArray });
      }}
    >
      {listOfLinks.map((element, index) => (
        <li key={index}>
          <Link href={element["link"]}>
            <a className={linksCla}>{element["title"]}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
