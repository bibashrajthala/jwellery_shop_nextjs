import React from "react";

import styles from "../../styles/Filters.module.scss";

const Filters = () => {
  return (
    <section className={styles["filters"]}>
      <div className={styles["filter"]}>
        <p className={styles["filter__text"]}>Filter By</p>
        <div className={styles["filter__list"]}>
          <select
            name=""
            id=""
            className={styles["filter__item"]}
            // placeholder="Price"
          >
            <option value="" disabled selected>
              Price
            </option>
            {/* options */}
          </select>
          <select
            name=""
            id=""
            className={styles["filter__item"]}
            // placeholder="Material"
          >
            <option value="" disabled selected>
              Material
            </option>
            {/* options */}
          </select>
          <select
            name=""
            id=""
            className={styles["filter__item"]}
            // placeholder="Purity"
          >
            <option value="" disabled selected>
              Purity
            </option>
            {/* options */}
          </select>
          <select
            name=""
            id=""
            className={styles["filter__item"]}
            // placeholder="Gender"
          >
            <option value="" disabled selected>
              Gender
            </option>
            {/* options */}
          </select>
          <select
            name=""
            id=""
            className={styles["filter__item"]}
            // placeholder="Collections"
          >
            <option value="" disabled selected>
              Collections
            </option>
            {/* options */}
          </select>
        </div>
      </div>
      <div className={styles["filter"]}>
        <p className={styles["filter__text"]}>Sort By</p>
        <div className={styles["filter__list"]}>
          <select
            name=""
            id=""
            className={`${styles["filter__item"]} ${styles["filter__item--sort"]}`}
            // placeholder="Latest"
          >
            <option value="" disabled selected>
              Latest
            </option>
            {/* options */}
          </select>
        </div>
      </div>
    </section>
  );
};

export default Filters;
