import React from "react";
import CartItemsList from "../components/cart/CartItemsList";
import HeroCommon from "../components/shared/HeroCommon";

import styles from "../styles/Cart.module.scss";

const Cart = () => {
  return (
    <section className={styles["cart"]}>
      <HeroCommon label="Shopping Cart" extraClassName="hero-cart" />

      <CartItemsList />
    </section>
  );
};

export default Cart;
