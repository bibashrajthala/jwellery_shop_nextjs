import React from "react";
import { useRouter } from "next/router";

import Heading from "../../components/shared/Heading";

import styles from "../../styles/Home.module.scss";

const HomeCollectionsSection = ({ collections }) => {
  const router = useRouter();
  return (
    <section className={styles["collections"]}>
      <Heading headingLabel="Collections" />

      <div className={styles["collections__grid"]}>
        {collections
          .filter((collection) => collection.is_parent)
          .slice(0, 6)
          .map((collection, index) => {
            const { title, id } = collection;
            return (
              <div
                key={id}
                className={`${styles["collection"]} ${
                  styles[`collection${index + 1}`]
                }`}
              >
                <h4 className={styles["collection__title"]}>{title}</h4>
                <button
                  onClick={
                    () =>
                      router.push(
                        `/collection/${collection.title.toLowerCase()}`
                      )
                    // router.push(`/collection/${id}`)
                  }
                  className="btn__secondary"
                >
                  View More
                </button>
              </div>
            );
          })}
        {/* <div className={`${styles["collection"]} ${styles["collection1"]}`}>
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
        </div> */}
      </div>
    </section>
  );
};

export default HomeCollectionsSection;
