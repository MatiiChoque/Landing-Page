import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import styles from "./Navbar.module.scss";
import logo from "../../assets/images/knogameicon.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);
  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="logo" />
        </a>
        <div className={styles.hamburger} onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul
          className={
            click ? `${styles.nav_menu} ${styles.active}` : styles.nav_menu
          }
        >
          <li className={styles.nav_item}>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link
              to="aboutus"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              About Us
            </Link>
          </li>
          {/* <li className={styles.nav_item}>
            <Link
              to="community"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Community
            </Link>
          </li> */}
          <li className={styles.nav_item}>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
