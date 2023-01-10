import React from "react";
import axios from "axios";

import Filters from "../components/shared/Filters";
import HeroCommon from "../components/shared/HeroCommon";
import ProductList from "../components/shared/ProductList";

import styles from "../styles/ProductPage.module.scss";

const Products = ({ products }) => {
  return (
    <div className={styles["products"]}>
      <HeroCommon label="All Products" extraClassName={"hero-products"} />

      <Filters />

      <ProductList products={products} />
    </div>
  );
};

export default Products;

export const getServerSideProps = async () => {
  const response = await axios.get("http://offerkcha.com/api/recent");
  const products = await response.data.data;

  return {
    props: {
      products,
    },
  };
};
