import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const chagebackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", chagebackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo">
        <img src={logo} alt="" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="main" smooth={true} duration={1000}>
            Header
          </Link>
        </li>
        <li>
          <Link to="features" smooth={true} duration={1000}>
            Feature
          </Link>
        </li>
        <li>
          <Link to="offer" smooth={true} duration={1000}>
            Offer
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={1000}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
