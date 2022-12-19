import React from "react";
import { Carousel } from "antd";

import styles from "../../styles/Home.module.scss";

const HomeHeroSection = () => {
  return (
    <section className={styles["hero-section"]}>
      <Carousel autoplay dots={false}>
        <div className={`${styles["hero"]} ${styles["hero1"]}`}>
          <h2 className={styles["hero__heading"]}>
            eXQUISITE DESIGNER RINGS
            <br /> <span>NEW COLLECTIONS</span>
          </h2>
          <button className={styles["hero__button"]}>View More</button>
        </div>
        <div className={`${styles["hero"]} ${styles["hero2"]}`}>
          <h2 className={styles["hero__heading"]}>
            The perfect ring for
            <br /> <span>your big day</span>
          </h2>
          <button className={styles["hero__button"]}>Shop Now</button>
        </div>
        <div className={`${styles["hero"]} ${styles["hero3"]}`}>
          <h2 className={styles["hero__heading"]}>
            TRADITIONAL DESIGNER JeWELRY
            <br /> <span>NEW COLLECTIONSy</span>
          </h2>
          <button className={styles["hero__button"]}>Shop Now</button>
        </div>
        <div className={`${styles["hero"]} ${styles["hero4"]}`}>
          <h2 className={styles["hero__heading"]}>
            Find your perfect diamond
            <br /> <span>by jewelry</span>
          </h2>
          <button className={styles["hero__button"]}>Shop Now</button>
        </div>
        <div className={`${styles["hero"]} ${styles["hero5"]}`}>
          <h2 className={styles["hero__heading"]}>
            Traditional costume jewelry
            <br /> <span>new collections</span>
          </h2>
          <button className={styles["hero__button"]}>Shop Now</button>
        </div>
      </Carousel>
    </section>
  );
};

export default HomeHeroSection;
