import React from "react";
import CartItem from "./CartItem";

import styles from "../../styles/Cart.module.scss";

const CartItemsList = () => {
  return (
    <div className={styles["cart__items-container"]}>
      {/* left  */}
      <div className={styles["cart__left"]}>
        <div className={styles["cart__table"]}>
          <div className={styles["cart__headings"]}>
            <h4 className={styles["cart__heading"]}>Product</h4>
            <h4 className={styles["cart__heading"]}>Price</h4>
            <h4 className={styles["cart__heading"]}>Quanitity</h4>
            <h4 className={styles["cart__heading"]}>Total</h4>
          </div>
          <div className={styles["cart__items"]}>
            {[1, 2, 3, 4].map((el, index) => (
              <CartItem key={index} />
            ))}
          </div>
        </div>
        <button className={`btn__inverted ${styles["cart__btn-clear"]}`}>
          Clear Cart
        </button>
      </div>

      {/* right  */}
      <div className={styles["cart__right"]}>
        <h4 className={styles["cart__heading-total"]}>Cart Totals</h4>

        <div className={styles["cart__totals-container"]}>
          <div className={styles["cart__totals"]}>
            <div className={styles["cart__totals-texts-container"]}>
              <div className={styles["cart__total"]}>
                <p className={styles["cart__total-text"]}>Subtotals:</p>
                <p className={styles["cart__total-text"]}>Rs. 70,000</p>
              </div>
              <div className={styles["cart__total"]}>
                <p className={styles["cart__total-text"]}>Totals:</p>
                <p className={styles["cart__total-text"]}>Rs. 70,000</p>
              </div>
            </div>
            <div className={styles["cart__totals-check-container"]}>
              <input type="checkbox" className={styles["cart__total-check"]} />
              <p className={styles["cart__total-check-text"]}>
                Shipping & taxes calculated at checkout
              </p>
            </div>
          </div>
          <div className={styles["cart__totals-btns"]}>
            <button className="btn__primary">Proceed To Checkout</button>
            <button className="btn__inverted">Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemsList;
