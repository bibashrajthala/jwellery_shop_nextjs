import React from "react";
import { useRouter } from "next/router";

import styles from "../../styles/ContactSection.module.scss";

function ContactSection() {
  const router = useRouter();

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
      <button onClick={() => router.push("/contact")} className="btn__tertiary">
        Contact Us
      </button>
    </section>
  );
}

export default ContactSection;
