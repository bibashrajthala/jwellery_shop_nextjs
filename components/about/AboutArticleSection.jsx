import Image from "next/image";
import React from "react";

import styles from "../../styles/AboutPage.module.scss";

const AboutArticleSection = () => {
  return (
    <article className={styles["articles"]}>
      <div className={`${styles["article"]} ${styles["article1"]} `}>
        <div className={styles["article__img-container"]}>
          <Image
            fill
            src="/articleImage1.png"
            alt="ArticleImage1"
            className={styles["article__img"]}
          />
        </div>
        <div className={styles["article__right"]}>
          <div className={styles["article__texts"]}>
            <h3 className={styles["article__heading"]}>
              Leaders in Wedding Jewelery
            </h3>
            <p className={styles["article__text"]}>
              Jewels is a Pret collection of fine jewellery that uses golds or
              uncuts to create stunning pieces of Jewellery that are an
              extension of your personality. Jewels has always been one of the
              most important things driving tradition and heritage. It
              epitomizes the beauty and mystery surrounding your culture.
              Jewellery through this site for jeweler online, strives to
              encapsulate your values and sentiments with its artistic outlook
              on jewellery design, gold sets and uncut diamond overall. Jewels
              Collection aims to get women back in touch with their roots,
              harking on their desire for contemporary looks and styles in uncut
              diamond jewellery.
            </p>
          </div>
          <button className={styles["article__btn"]}>Start Shopping</button>
        </div>
      </div>
      <div className={`${styles["article"]} ${styles["article2"]} `}>
        <div className={styles["article__img-container"]}>
          <Image
            fill
            src="/articleImage2.png"
            alt="ArticleImage2"
            className={styles["article__img"]}
          />
        </div>
        <div className={styles["article__right"]}>
          <div className={styles["article__texts"]}>
            <h3 className={styles["article__heading"]}>Collections for you</h3>
            <p className={styles["article__text"]}>
              Jewels is a Pret collection of fine jewellery that uses golds or
              uncuts to create stunning pieces of Jewellery that are an
              extension of your personality. Jewels has always been one of the
              most important things driving tradition and heritage. It
              epitomizes the beauty and mystery surrounding your culture.
              Jewellery through this site for jeweler online, strives to
              encapsulate your values and sentiments with its artistic outlook
              on jewellery design, gold sets and uncut diamond overall. Jewels
              Collection aims to get women back in touch with their roots,
              harking on their desire for contemporary looks and styles in uncut
              diamond jewellery.
            </p>
          </div>
          <button className={styles["article__btn"]}>View Collections</button>
        </div>
      </div>
      <div className={`${styles["article"]} ${styles["article3"]} `}>
        <div className={styles["article__img-container"]}>
          <Image
            fill
            src="/articleImage3.png"
            alt="ArticleImage3"
            className={styles["article__img"]}
          />
        </div>
        <div className={styles["article__right"]}>
          <div className={styles["article__texts"]}>
            <h3 className={styles["article__heading"]}>100% Gold - 24 Karet</h3>
            <p className={styles["article__text"]}>
              Jewels is a Pret collection of fine jewellery that uses golds or
              uncuts to create stunning pieces of Jewellery that are an
              extension of your personality. Jewels has always been one of the
              most important things driving tradition and heritage. It
              epitomizes the beauty and mystery surrounding your culture.
              Jewellery through this site for jeweler online, strives to
              encapsulate your values and sentiments with its artistic outlook
              on jewellery design, gold sets and uncut diamond overall. Jewels
              Collection aims to get women back in touch with their roots,
              harking on their desire for contemporary looks and styles in uncut
              diamond jewellery.
            </p>
          </div>
          <button className={styles["article__btn"]}>Shop Now</button>
        </div>
      </div>
    </article>
  );
};

export default AboutArticleSection;
