import React from "react";
import Image from "next/image";
import { BiPlus, BiMinus } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

import styles from "../../styles/Cart.module.scss";

const CartItem = () => {
  return (
    <div className={styles["cart__item"]}>
      <div className={styles["cart__item-details"]}>
        <div className={styles["cart__item-image-container"]}>
          <button className={styles["cart__item-cancel-btn-container"]}>
            <RxCross2 className={styles["cart__item-cancel-btn"]} />
          </button>
          <Image
            src="/cardImage1.png"
            alt="Cart Item Image"
            className={styles["cart__item-image"]}
            fill
          />
        </div>
        <div className={styles["cart__item-detail"]}>
          <h5 className={styles["cart__item-name"]}>Blue Diamond Ring</h5>
          <div className={styles["cart__item-detail-texts"]}>
            <p className={styles["cart__item-text"]}>Purity: 24 Caret</p>
            <p className={styles["cart__item-text"]}>Size: XL</p>
          </div>
        </div>
      </div>
      <p className={styles["cart__item-price"]}>Rs. 70,000</p>
      <div className={styles["cart__item-quantity-container"]}>
        <div className={styles["cart__item-quantity-box"]}>
          <div className={styles["cart__item-btn-container"]}>
            <BiMinus className={styles["cart__item-btn"]} />
          </div>
          <p className={styles["cart__item-quantity"]}>1</p>
          <div className={styles["cart__item-btn-container"]}>
            <BiPlus className={styles["cart__item-btn"]} />
          </div>
        </div>
      </div>
      <p className={styles["cart__item-price"]}>Rs. 70,000</p>
    </div>
  );
};

export default CartItem;
