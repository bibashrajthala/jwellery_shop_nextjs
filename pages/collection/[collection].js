import React from "react";
// import { Pagination } from "antd";

import Filters from "../../components/shared/Filters";
import HeroCommon from "../../components/shared/HeroCommon";
import ProductList from "../../components/shared/ProductList";

import styles from "../../styles/ProductPage.module.scss";
const CollectionDetails = () => {
  return (
    <div className={styles["products"]}>
      <HeroCommon label="Necklaces" extraClassName={"hero-products"} />

      <Filters />

      <ProductList />

      {/* <Pagination defaultCurrent={1} total={50} /> */}
    </div>
  );
};

export default CollectionDetails;
