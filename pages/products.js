import React from "react";
import Filters from "../components/shared/Filters";
import HeroCommon from "../components/shared/HeroCommon";
import ProductList from "../components/shared/ProductList";

import styles from "../styles/ProductPage.module.scss";

const products = () => {
  return (
    <div className={styles["products"]}>
      <HeroCommon label="All Products" extraClassName={"hero-products"} />

      <Filters />

      <ProductList />
    </div>
  );
};

export default products;
