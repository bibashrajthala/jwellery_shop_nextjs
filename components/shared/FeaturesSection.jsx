import React from "react";

import FeatureIcon1 from "../../public/FeatureIcon1.svg";
import FeatureIcon2 from "../../public/FeatureIcon2.svg";
import FeatureIcon3 from "../../public/FeatureIcon3.svg";
import FeatureIcon4 from "../../public/FeatureIcon4.svg";

import styles from "../../styles/Featues.module.scss";

const FeaturesSection = () => {
  return (
    <section className={styles["features"]}>
      <div className={styles["feature"]}>
        <FeatureIcon1 className={styles["feature__svg"]} />
        <p className={styles["feature__text"]}>Exclusive New Collections</p>
      </div>

      <div className={styles["feature"]}>
        <FeatureIcon2 className={styles["feature__svg"]} />
        <p className={styles["feature__text"]}>Certified Gold Jewelry</p>
      </div>
      <div className={styles["feature"]}>
        <FeatureIcon3 className={styles["feature__svg"]} />
        <p className={styles["feature__text"]}>24/7 Customer Support</p>
      </div>
      <div className={styles["feature"]}>
        <FeatureIcon4 className={styles["feature__svg"]} />
        <p className={styles["feature__text"]}>100% Secure Payment</p>
      </div>
    </section>
  );
};

export default FeaturesSection;
