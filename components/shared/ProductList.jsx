import React from "react";
import SingleProductCard from "./SingleProductCard";

import styles from "../../styles/ProductList.module.scss";

const ProductList = () => {
  return (
    <section className={styles["items"]}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el, index) => (
        <SingleProductCard key={index} />
      ))}
    </section>
  );
};

export default ProductList;
