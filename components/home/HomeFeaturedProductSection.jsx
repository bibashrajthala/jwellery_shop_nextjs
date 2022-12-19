import React from "react";
import Heading from "../shared/Heading";
import ProductList from "../shared/ProductList";

import styles from "../../styles/Home.module.scss";

const HomeFeaturedProductSection = () => {
  return (
    <div className={styles["featured-products"]}>
      <Heading headingLabel="Featured Products" />

      <ProductList />
    </div>
  );
};

export default HomeFeaturedProductSection;
