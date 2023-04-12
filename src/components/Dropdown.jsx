import { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "../styles/dropdown.css";

export default function Dropdown() {
  const [menu, setMenu] = useState(false);

  function handleClick() {
    setMenu(!menu);
  }

  return (
    <div className="dropdown-list">
      <ul
        className={menu ? "drop-menu" : "dropdown-menu"}
        onClick={handleClick}
      >
        {MenuItems.map((item, index) => {
          return (
            <li
              className="menu-items"
              key={index}
              onClick={() => setMenu(false)}
            >
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
