// Libraries
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

//Components
import DropdownMenu from "./DropdownMenu";

// Styling
import navStyles from "@styles/components/Navigation.module.scss";
import styled from "styled-components";

var links = require("@libs/links.json");

const StyledDropdownMenu = styled(DropdownMenu)`
  justify-self: start;
  left: -4rem;
`;

const Navigation = ({}) => {
  const [menus, setMenus] = useState([0, 0, 0, 0, 0]);
  const initialStat = [0, 0, 0, 0, 0];

  const openMenus = (index) => {
    initialStat[index] = 1;
    setMenus(initialStat);
  };
  const closeMenus = (index) => {
    initialStat[index] = 0;
    setMenus(initialStat);
  };

  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.header}>
        <ul className={navStyles.lists}>
          <li className={navStyles.listItems}>
            <Link href="/">
              <a>
                <Image
                  alt="NK Image"
                  src="/images/logoNK2.png"
                  width={91}
                  height={64}
                  layout="fixed"
                  className={navStyles.logo}
                />
              </a>
            </Link>
          </li>
          {Object.keys(links).map((key, index) => (
            <li
              className={navStyles.listItems}
              key={index}
              onMouseOver={() => openMenus(index)}
              onMouseOut={() => closeMenus(index)}
            >
              <Link href={links[key]["main"]["link"]}>
                <a className={navStyles.links}>
                  {links[key]["main"]["title"]}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <span className={navStyles.divider}></span>
      </div>
      {Object.keys(links).map((key, index) =>
        menus[index] ? (
          <StyledDropdownMenu
            key={index}
            index={index}
            listOfLinks={links[key]["links"]}
          ></StyledDropdownMenu>
        ) : null
      )}
    </nav>
  );
};

export default Navigation;
