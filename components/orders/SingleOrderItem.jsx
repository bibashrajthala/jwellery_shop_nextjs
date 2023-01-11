import React from "react";
import Image from "next/image";
import styles from "../../styles/Orders.module.scss";

const SingleOrderItem = () => {
  return (
    <div className={styles["order"]}>
      <div className={styles["order__details"]}>
        <div className={styles["order__image-container"]}>
          <Image
            src="/cardImage1.png"
            alt="Cart Item Image"
            className={styles["order__image"]}
            fill
          />
        </div>
        <div className={styles["order__detail"]}>
          <h5 className={styles["order__name"]}>Blue Diamond Ring</h5>
          <div className={styles["order__detail-texts"]}>
            <p className={styles["order__text"]}>Purity: 24 Caret</p>
            <p className={styles["order__text"]}>Size: XL</p>
          </div>
        </div>
      </div>
      <p className={styles["order__quantity"]}>Qty: 1</p>
      <p className={styles["order__date"]}>22/02/2022</p>
      <p className={styles["order__status"]}>Pending</p>
    </div>
  );
};

export default SingleOrderItem;
