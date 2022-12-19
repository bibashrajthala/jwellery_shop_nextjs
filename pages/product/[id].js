import React from "react";
import ProductDetailProductSection from "../../components/productDetail/ProductDetailProductSection";
import ProductDetailsTabSection from "../../components/productDetail/ProductDetailsTabSection";
import FeaturesSection from "../../components/shared/FeaturesSection";
import SliderSection from "../../components/shared/SliderSection";

import styles from "../../styles/ProductDetailPage.module.scss";

const ProductDetail = () => {
  return (
    <div className={styles["productDetails"]}>
      <ProductDetailProductSection />

      <FeaturesSection />

      <ProductDetailsTabSection />

      <SliderSection headingLabel="Related Products" />
    </div>
  );
};

export default ProductDetail;
