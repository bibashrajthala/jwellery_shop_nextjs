import React from "react";
import { useRouter } from "next/router";

import styles from "../../styles/CollectionsPage.module.scss";

const CollectionListSection = ({ collections }) => {
  const router = useRouter();
  return (
    <section className={styles["collection-list"]}>
      {collections
        .filter((collection) => collection.is_parent)
        .map((collection) => (
          <div key={collection.id} className={styles["collection"]}>
            <h3 className={styles["collection__title"]}>{collection.title}</h3>
            <button
              onClick={
                () =>
                  router.push(`/collection/${collection.title.toLowerCase()}`)
                // router.push(`/collection/${id}`)
              }
              // className={styles["collection__btn"]}
              className="btn__secondary"
            >
              View More
            </button>
          </div>
        ))}
      {/* <div className={styles["collection"]}>
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
      </div> */}
    </section>
  );
};

export default CollectionListSection;
