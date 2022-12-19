import Image from "next/image";
import React from "react";

import styles from "../../styles/SingleProductCard.module.scss";

const SingleProductCard = () => {
  return (
    <div className={styles["item"]}>
      <div className={styles["item__img-container"]}>
        <Image
          src="/featuredProductCardImage1.png"
          alt="FeaturedProductCardImage"
          className={styles["item_img"]}
          fill
        />
      </div>
      <div className={styles["item__texts"]}>
        <h3 className={styles["item__title"]}>Diamond Ring</h3>
        <p className={styles["item__prices"]}>
          <span className={styles["item__price"]}>Rs.145,000</span>
          <del className={styles["item__cut-price"]}>Rs.180,000</del>
        </p>
      </div>
    </div>
  );
};

export default SingleProductCard;
