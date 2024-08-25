import React from "react";
import styles from "./Contact.module.scss";

import BlackArrow from "../../assets/images/blackArrow.png";
const Contact = () => {
  return (
    <div id="contact" className={styles.page}>
      <div className={styles.content}>
        <div className={styles.main_text}>
          <p>
            Would you like to be better at League of Legends? Go from amateur to
            pro.
          </p>
        </div>
        <form className={styles.first_form}>
          <input
            className={styles.inputForm}
            type="email"
            name="email"
            defaultValue=""
            autoComplete="email"
            placeholder="Your email"
          />
          <button className={styles.buttonForm}>Register</button>
        </form>
      </div>
      <div className={styles.content_image}>
        <img className={styles.right} src={BlackArrow} alt="" />
      </div>
    </div>
  );
};
export default Contact;
