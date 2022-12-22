import Image from "next/image";
import React from "react";

import styles from "../../styles/SingleProductCard.module.scss";

const SingleProductCard = ({ product }) => {
  const { title, photo, discount, price } = product;

  return (
    <div className={styles["item"]}>
      <div className={styles["item__img-container"]}>
        {/* <button className={styles["item__btn"]}>View More</button> */}
        <button className={`btn__secondary ${styles["item__btn"]}`}>
          View More
        </button>
        <Image
          // src="/featuredProductCardImage1.png"
          src={photo}
          alt="FeaturedProductCardImage"
          className={styles["item__img"]}
          fill
        />
      </div>
      <div className={styles["item__texts"]}>
        <h3 className={styles["item__title"]}>{title}</h3>
        <p className={styles["item__prices"]}>
          <span className={styles["item__price"]}>
            Rs.{price - (discount / 100) * price}
          </span>
          <del className={styles["item__cut-price"]}>Rs.{price}</del>
        </p>
      </div>
    </div>
  );
};

export default SingleProductCard;
