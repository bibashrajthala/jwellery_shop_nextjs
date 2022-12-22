import React from "react";
import Image from "next/image";

import styles from "../../styles/Home.module.scss";

const HomeAboutSection = () => {
  return (
    <section className={styles["about"]}>
      <div className={styles["about__texts"]}>
        <h3 className={styles["about__heading"]}>About</h3>
        <p className={styles["about__description"]}>
          Jewels is a Pret collection of fine jewellery that uses golds or
          uncuts to create stunning pieces of Jewellery that are an extension of
          your personality. Jewels has always been one of the most important
          things driving tradition and heritage. It epitomizes the beauty and
          mystery surrounding your culture. Jewellery through this site for
          jeweler online, strives to encapsulate your values and sentiments with
          its artistic outlook on jewellery design, gold sets and uncut diamond
          overall. Jewels Collection aims to get women back in touch with their
          roots, harking on their desire for contemporary looks and styles in
          uncut diamond jewellery.
        </p>
        {/* <button className={styles["about__btn"]}>Start Shopping</button> */}
        <button className="btn__inverted">Start Shopping</button>
      </div>
      <div className={styles["about__img-container"]}>
        <Image
          src="/aboutImage.png"
          alt="AboutImage"
          className={styles["about__img"]}
          fill
        />
      </div>
    </section>
  );
};

export default HomeAboutSection;
