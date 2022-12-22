import React from "react";
import axios from "axios";

import ProductDetailProductSection from "../../components/productDetail/ProductDetailProductSection";
import ProductDetailsTabSection from "../../components/productDetail/ProductDetailsTabSection";
import FeaturesSection from "../../components/shared/FeaturesSection";
import SliderSection from "../../components/shared/SliderSection";

import styles from "../../styles/ProductDetailPage.module.scss";

const ProductDetail = ({ recentProducts }) => {
  return (
    <div className={styles["productDetails"]}>
      <ProductDetailProductSection />

      <FeaturesSection />

      <ProductDetailsTabSection />

      <SliderSection
        headingLabel="Related Products"
        recentProducts={recentProducts}
      />
    </div>
  );
};

export default ProductDetail;

export const getServerSideProps = async () => {
  const response = await axios.get("http://offerkcha.com/api/recent");
  const recentProducts = await response.data.data;

  return {
    props: {
      recentProducts,
    },
  };
};
