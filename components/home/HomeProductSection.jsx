import Image from "next/image";
import React from "react";

import styles from "../../styles/Home.module.scss";

const HomeProductSection = () => {
  return (
    <section className={styles["product"]}>
      <div className={styles["product__img-container"]}>
        <Image
          src="/productImage.png"
          alt="ProductImage"
          className={styles["product__img"]}
          fill
        />
      </div>

      <div className={styles["product__right"]}>
        <div className={styles["product__texts"]}>
          <h4 className={styles["product__heading"]}>
            Unique features with latest & trending products.
          </h4>
          <ul className={styles["product__features"]}>
            <li className={styles["product__feature"]}>
              <div className={styles["product__dot"]} />
              <div className={styles["product__text"]}>
                All frames constructed with hardwood solids and laminates
              </div>
            </li>
            <li className={styles["product__feature"]}>
              <div className={styles["product__dot"]} />
              <div className={styles["product__text"]}>
                Reinforced with double wood dowels, glue, screw - nails corner
              </div>
            </li>
            <li className={styles["product__feature"]}>
              <div className={styles["product__dot"]} />
              <div className={styles["product__text"]}>
                Arms, backs and seats are structurally reinforced
              </div>
            </li>
          </ul>
        </div>

        <div className={styles["product__pricing"]}>
          {/* <button className={styles["product__btn"]}>Add to cart</button> */}
          <button className="btn__primary">Add to cart</button>

          <div className={styles["product__price-container"]}>
            <p className={styles["product__title"]}>Golden Ring</p>
            <p className={styles["product__price"]}>Rs. 90,200</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProductSection;
