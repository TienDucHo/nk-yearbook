// Libraries
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import {
  globalStateContext,
  dispatchStateContext,
} from "../pages/_app";

//Components
import DropdownMenu from "./DropdownMenu";

// Styling
import navStyles from "@styles/components/Navigation.module.scss";

var links = require("@libs/links.json");

const useGlobalState = () => [
  useContext(globalStateContext),
  useContext(dispatchStateContext),
];

const Navigation = ({}) => {
  const [state, dispatch] = useGlobalState();

  return (
    <>
      <nav className={navStyles.nav}>
        <Link href="/">
          <a className={navStyles.logo}>
            <Image
              alt="NK Image"
              src="/images/logoNK2.png"
              width={91}
              height={64}
              layout="fixed"
            />
          </a>
        </Link>
        <ul className={navStyles.lists}>
          {Object.keys(links).map((key, index) => (
            <li
              className={navStyles.listItems}
              key={index}
              onMouseEnter={() => {
                let navArray = state.nav;
                navArray[index] = 1;
                dispatch({ nav: navArray });
              }}
              onMouseLeave={() => {
                let navArray = state.nav;
                navArray[index] = 0;
                dispatch({ nav: navArray });
              }}
            >
              <Link href={links[key]["main"]["link"]}>
                <a className={navStyles.links}>
                  {links[key]["main"]["title"]}
                </a>
              </Link>
              {state.nav[index] ? (
                <DropdownMenu
                  key={index}
                  index={index}
                  listOfLinks={links[key]["links"]}
                  className={links[key]["links"].length > 0}
                ></DropdownMenu>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <div className={navStyles.divider}></div>
    </>
  );
};

export default Navigation;
