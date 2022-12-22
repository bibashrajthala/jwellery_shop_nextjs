import React from "react";

import Heading from "./Heading";
import CardSlider from "./CardSlider";

import styles from "../../styles/SliderSection.module.scss";

function SliderSection({ headingLabel, recentProducts }) {
  return (
    <section className={styles["cards"]}>
      <Heading headingLabel={headingLabel} />

      <CardSlider recentProducts={recentProducts} />
    </section>
  );
}

export default SliderSection;
