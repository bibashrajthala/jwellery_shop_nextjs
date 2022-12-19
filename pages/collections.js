import React from "react";
import CollectionListSection from "../components/collections/CollectionListSection";
import Filters from "../components/shared/Filters";
import HeroCommon from "../components/shared/HeroCommon";

import styles from "../styles/CollectionsPage.module.scss";

const collections = () => {
  return (
    <div className={styles["collections"]}>
      <HeroCommon label="Collections" extraClassName="hero-collections" />

      <Filters />

      <CollectionListSection />
    </div>
  );
};

export default collections;
