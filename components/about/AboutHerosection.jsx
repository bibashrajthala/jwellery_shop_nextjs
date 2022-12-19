import React from "react";

import styles from "../../styles/AboutPage.module.scss";

const AboutHerosection = () => {
  return (
    <section className={styles["hero"]}>
      <div className={styles["hero__card"]}>
        <h2 className={styles["hero__heading"]}>
          OUR <span>VALUES</span>{" "}
        </h2>
        <p className={styles["hero__texts"]}>
          Jewels is a Pret collection of fine jewellery that uses golds or
          uncuts to create stunning pieces of Jewellery that are an extension of
          your personality. Jewels has always been one of the most important
          things driving tradition and heritage. Jshop is one best jewel you can
          find. always been one of the most important things driving tradition
          and heritage. Jshop is one best jewel you can find. tradition and
          heritage. Jshop is one best jewel you can find.
        </p>
      </div>
    </section>
  );
};

export default AboutHerosection;
