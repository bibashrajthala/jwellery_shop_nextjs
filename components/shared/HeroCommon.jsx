import React from "react";
import styles from "../../styles/HeroCommon.module.scss";

import HeadingLeft from "../../public/headingLeft.svg";
import HeadingRight from "../../public/headingRight.svg";

const HeroCommon = ({ label, extraClassName }) => {
  return (
    <section className={`${styles["hero"]} ${styles[extraClassName]}`}>
      <div className={styles["hero__heading-container"]}>
        <HeadingLeft />
        <h2 className={styles["hero__heading"]}>{label}</h2>
        <HeadingRight />
      </div>
    </section>
  );
};

export default HeroCommon;
