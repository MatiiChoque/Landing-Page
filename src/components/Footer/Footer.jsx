import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-scroll";
import logo from "../../assets/images/KnogameFooter.png";
import {
  InstagramLogo,
  LinkedinLogo,
  FacebookLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
const Footer = () => {
  return (
    <div className={styles.page}>
      <nav className={styles.content}>
        <Link href="/" className={styles.logo}>
          <img src={logo} alt="logo" />
        </Link>

        <p>knogame &copy; 2024 </p>

        <div className={styles.content_icons}>
          <a href="https://www.instagram.com/knogame.app/">
            <InstagramLogo
              className={styles.icon_network}
              size={20}
              color="#ffffff"
              weight="fill"
            />
          </a>
          <a href="https://www.linkedin.com/company/103574235/admin/dashboard/">
            <LinkedinLogo
              className={styles.icon_network}
              size={20}
              color="#ffffff"
              weight="fill"
            />
          </a>
          <a href="https://www.youtube.com/@Knogame">
            <YoutubeLogo
              className={styles.icon_network}
              size={20}
              color="#ffffff"
              weight="fill"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};
export default Footer;
