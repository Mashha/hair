import { useState, useEffect } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { NavHashLink } from "react-router-hash-link";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [show, setShow] = useState(false);

  function changeClick() {
    setMenu(!menu);
  }

  function closeMobileMenu() {
    setMenu(false);
  }

  function onMouseEnter() {
    setDropdown(true);
  }

  function onMouseLeave() {
    setDropdown(false);
  }

  function handleShow() {
    if (window.innerWidth > 769) {
      if (window.pageYOffset > 0) {
        if (!show) {
          setShow(true);
        }
      } else {
        setShow(false);
      }
    } else {
      setShow(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleShow);

    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <>
      <nav className={`navigation ${show ? "nav-color" : "transparent"}`}>
        <Link to="/" className="logo">
          Logo
        </Link>

        <div className="menu-icon" onClick={changeClick}>
          <i className={menu ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={menu ? "nav-side-menu start" : "nav-side-menu"}>
          <li
            className="nav-items"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link className="nav-links" onClick={closeMobileMenu}>
              Storitve <i className="fas fa-caret-down" />
              {dropdown && <Dropdown />}
            </Link>
          </li>

          <li className="nav-items">
            <NavHashLink
              to="/home/#about"
              className="nav-links"
              onClick={closeMobileMenu}
              smooth
            >
              {" "}
              O meni{" "}
            </NavHashLink>
          </li>

          <li className="nav-items">
            <NavHashLink
              to="/home/#why-us"
              className="nav-links"
              onClick={closeMobileMenu}
              smooth
            >
              {" "}
              Zakaj Narg{" "}
            </NavHashLink>
          </li>

          <li className="nav-items">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              {" "}
              Kontakt{" "}
            </Link>
          </li>

          <li className="nav-items">
            <Link
              to="tel:064-157-600"
              className="nav-links-phone"
              onClick={closeMobileMenu}
            >
              <i className="fa-solid fa-phone"></i>
              064-157-600
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
