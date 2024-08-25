import React from "react";
import styles from "./AboutUs.module.scss";
import DemoVideo from "../../assets/images/demo-video.png";
import CardImage1 from "../../assets/images/card1.png";
import CardImage2 from "../../assets/images/card2.png";
import CardImage3 from "../../assets/images/card3.png";

const AboutUs = () => {
  return (
    <div id="aboutus" className={styles.hero}>
      <div className={styles.content}>
        <section className={styles.content_video}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/n-28BcJoNbg?si=s8i52T0uh99_rtBc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </section>
        <section className={styles.content_cards}>
          <div className={styles.card}>
            <img className={styles.image_card} src={CardImage1} alt="" />
            <p>Intelligent Coach</p>
            <p>
              An AI coach, exclusively for you, will advise you how to play, and
              whats strategies to follow.
            </p>
          </div>
          <div className={styles.card}>
            <img className={styles.image_card} src={CardImage2} alt="" />
            <p>Automatic Content Generation</p>
            <p>Automatically convert your games into shareable content.</p>
          </div>
          <div className={styles.card}>
            <img className={styles.image_card} src={CardImage3} alt="" />
            <p>Heatmap and Performance Reports</p>
            <p>
              Identify key points: wards, kills, objectives, and more. Get a
              report of important statistics.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
