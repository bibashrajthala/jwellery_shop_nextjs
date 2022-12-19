import React from "react";

import styles from "../../styles/CollectionsPage.module.scss";

const CollectionListSection = () => {
  return (
    <section className={styles["collection-list"]}>
      <div className={styles["collection"]}>
        <h3 className={styles["collection__title"]}>Necklaces</h3>
        <button className={styles["collection__btn"]}>View More</button>
      </div>
      <div className={styles["collection"]}>
        <h3 className={styles["collection__title"]}>Rings</h3>
        <button className={styles["collection__btn"]}>View More</button>
      </div>
      <div className={styles["collection"]}>
        <h3 className={styles["collection__title"]}>Ear Rings</h3>
        <button className={styles["collection__btn"]}>View More</button>
      </div>
      <div className={styles["collection"]}>
        <h3 className={styles["collection__title"]}>Bracelets</h3>
        <button className={styles["collection__btn"]}>View More</button>
      </div>
      <div className={styles["collection"]}>
        <h3 className={styles["collection__title"]}>Summer</h3>
        <button className={styles["collection__btn"]}>View More</button>
      </div>
      <div className={styles["collection"]}>
        <h3 className={styles["collection__title"]}>Wedding</h3>
        <button className={styles["collection__btn"]}>View More</button>
      </div>
      <div className={styles["collection"]}>
        <h3 className={styles["collection__title"]}>Necklaces</h3>
        <button className={styles["collection__btn"]}>View More</button>
      </div>
      <div className={styles["collection"]}>
        <h3 className={styles["collection__title"]}>Rings</h3>
        <button className={styles["collection__btn"]}>View More</button>
      </div>
      <div className={styles["collection"]}>
        <h3 className={styles["collection__title"]}>Ear Rings</h3>
        <button className={styles["collection__btn"]}>View More</button>
      </div>
      <div className={styles["collection"]}>
        <h3 className={styles["collection__title"]}>Bracelets</h3>
        <button className={styles["collection__btn"]}>View More</button>
      </div>
    </section>
  );
};

export default CollectionListSection;
