import React from "react";
import axios from "axios";

import CollectionListSection from "../components/collections/CollectionListSection";
import Filters from "../components/shared/Filters";
import HeroCommon from "../components/shared/HeroCommon";

import styles from "../styles/CollectionsPage.module.scss";

const collections = ({ collections }) => {
  return (
    <div className={styles["collections"]}>
      <HeroCommon label="Collections" extraClassName="hero-collections" />

      <Filters />

      <CollectionListSection collections={collections} />
    </div>
  );
};

export default collections;

export const getServerSideProps = async () => {
  const response = await axios.get("http://offerkcha.com/api/category");
  const collections = await response.data.data;

  return {
    props: {
      collections,
    },
  };
};
