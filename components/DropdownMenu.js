import { useState } from "react";
import Link from "next/link";
import dropdownStyles from "@styles/components";
const DropdownMenu = ({ listOfLinks }) => {
  const [shown, setShown] = useState(false);
  const showMenu = () => {
    setShown(!shown);
  };
  return (
    <div>
      <Link href={listOfLinks[0]["link"]}>
        <a onMouseOver={showMenu}>{listOfLinks[0]["title"]}</a>
      </Link>
      {shown ? (
        <ul>
          {listOfLinks.map((element) => {
            <li>
              <Link href={element["links"]}>
                <a className={dropdownStyles.links}>
                  {element["title"]}
                </a>
              </Link>
            </li>;
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default DropdownMenu;
