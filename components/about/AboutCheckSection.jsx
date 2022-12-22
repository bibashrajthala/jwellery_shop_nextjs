import React from "react";
import { useRouter } from "next/router";

import styles from "../../styles/AboutPage.module.scss";

const AboutCheckSection = () => {
  const router = useRouter();

  return (
    <section className={styles["check"]}>
      <div className={styles["check__texts"]}>
        <h3 className={styles["check__heading"]}>
          Check out our latest wedding
          <br />
          collections handpicked for you
        </h3>
        <p className={styles["check__text"]}>
          Make your wedding perfect with Jewelries from Jshop.
        </p>
      </div>
      <button
        onClick={() => router.push("/collections")}
        className="btn__tertiary"
      >
        Check Now
      </button>
    </section>
  );
};

export default AboutCheckSection;
