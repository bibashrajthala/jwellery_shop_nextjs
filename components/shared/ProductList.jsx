import React from "react";
import SingleProductCard from "./SingleProductCard";

import styles from "../../styles/ProductList.module.scss";

const ProductList = ({
  recentProducts,
  isFeatured,
  products,
  collections,
  collection,
}) => {
  return (
    <section className={styles["items"]}>
      {isFeatured &&
        recentProducts
          .filter((product) => product.is_featured)
          .map((product) => (
            <SingleProductCard key={product.id} product={product} />
          ))}
      {products &&
        products.map((product) => (
          <SingleProductCard key={product.id} product={product} />
        ))}
      {/* {collections &&
        collections
          .filter(
            (collection) =>
              !collection.is_parent && collection.parent_id === collection.id
          )
          .map((product) => (
            <SingleProductCard key={product.id} product={product} />
          ))} */}
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el, index) => (
        <SingleProductCard key={index} />
      ))} */}
    </section>
  );
};

export default ProductList;
