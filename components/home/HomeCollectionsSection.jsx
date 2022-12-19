import React from "react";

import Heading from "../../components/shared/Heading";

import styles from "../../styles/Home.module.scss";

const HomeCollectionsSection = () => {
  return (
    <section className={styles["collections"]}>
      <Heading headingLabel="Collections" />

      <div className={styles["collections__grid"]}>
        <div className={`${styles["collection"]} ${styles["collection1"]}`}>
          <h4 className={styles["collection__title"]}>Wedding Collection</h4>
          <button className={styles["collection__btn"]}>View More</button>
        </div>
        <div className={`${styles["collection"]} ${styles["collection2"]}`}>
          <h4 className={styles["collection__title"]}>Wedding Collection</h4>
          <button className={styles["collection__btn"]}>View More</button>
        </div>
        <div className={`${styles["collection"]} ${styles["collection3"]}`}>
          <h4 className={styles["collection__title"]}>Wedding Collection</h4>
          <button className={styles["collection__btn"]}>View More</button>
        </div>
        <div className={`${styles["collection"]} ${styles["collection4"]}`}>
          <h4 className={styles["collection__title"]}>Wedding Collection</h4>
          <button className={styles["collection__btn"]}>View More</button>
        </div>
        <div className={`${styles["collection"]} ${styles["collection5"]}`}>
          <h4 className={styles["collection__title"]}>Wedding Collection</h4>
          <button className={styles["collection__btn"]}>View More</button>
        </div>
        <div className={`${styles["collection"]} ${styles["collection6"]}`}>
          <h4 className={styles["collection__title"]}>Wedding Collection</h4>
          <button className={styles["collection__btn"]}>View More</button>
        </div>
      </div>
    </section>
  );
};

export default HomeCollectionsSection;
