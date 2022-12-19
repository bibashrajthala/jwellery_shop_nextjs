import React from "react";

import styles from "../../styles/ContactSection.module.scss";

function ContactSection() {
  return (
    <section className={styles["contact"]}>
      <div className={styles["contact__texts"]}>
        <h3 className={styles["contact__heading"]}>
          Jewelries made by the best, for the best.
          <br /> Contact us for exclusive jeweleries
        </h3>
        <p className={styles["contact__text"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, cons adipiscing elit. Lorem ipsum dolor sit am
        </p>
      </div>
      <button className={styles["contact__btn"]}>Contact Us</button>
    </section>
  );
}

export default ContactSection;
