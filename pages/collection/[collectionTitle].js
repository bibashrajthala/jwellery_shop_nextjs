import React from "react";
// import { Pagination } from "antd";
import { useRouter } from "next/router";
import axios from "axios";

import Filters from "../../components/shared/Filters";
import HeroCommon from "../../components/shared/HeroCommon";
import ProductList from "../../components/shared/ProductList";

import styles from "../../styles/ProductPage.module.scss";

const CollectionDetails = ({ collections }) => {
  const router = useRouter();
  const { collectionTitle } = router.query;

  const collection = collections.find(
    (col) => col.title.toLowerCase() === collectionTitle
  );

  // console.log(collections);
  // console.log(collectionTitle);
  // console.log(collection);

  return (
    <div className={styles["products"]}>
      {/* <HeroCommon label="Necklaces" extraClassName={"hero-products"} /> */}
      <HeroCommon label={collection.title} extraClassName={"hero-products"} />

      <Filters />

      <ProductList collections={collections} collection={collection} />

      {/* <Pagination defaultCurrent={1} total={50} /> */}
    </div>
  );
};

export default CollectionDetails;

export const getServerSideProps = async () => {
  const response = await axios.get("http://offerkcha.com/api/category");
  const collections = await response.data.data;

  return {
    props: {
      collections,
    },
  };
};
