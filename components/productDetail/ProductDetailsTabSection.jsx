import React from "react";
import Image from "next/image";

import styles from "../../styles/ProductDetailPage.module.scss";

const ProductDetailsTabSection = () => {
  return (
    <section className={styles["tabs"]}>
      <Image
        src="/tabImage1-productDetail.png"
        alt="TabImage1"
        className={styles["tabs__sideImage1"]}
        width={573}
        height={787}
      />
      <Image
        src="/tabImage2-productDetail.png"
        alt="TabImage2"
        className={styles["tabs__sideImage2"]}
        width={705}
        height={927}
      />
      <div className={styles["tab"]}>
        <div className={styles["tab__titles"]}>
          <button
            className={`${styles["tab__title"]}  ${styles["tab__title--active"]}`}
          >
            Product Details
          </button>
          <button className={styles["tab__title"]}>Description</button>
          <button className={styles["tab__title"]}>Reviews</button>
        </div>
        <div className={styles["tab__contents"]}>
          <div className={styles["tab__content"]}>
            <h4 className={styles["tab__content-heading"]}>Product Details</h4>
            <div className={styles["tab__content-boxes"]}>
              <div className={styles["tab__content-box"]}>
                <h5 className={styles["tab__content-title"]}>
                  Product Information
                </h5>
                <div className={styles["tab__content-texts"]}>
                  <p className={styles["tab__content-text"]}>
                    Gross Weight - 2.332 g
                  </p>
                  <p className={styles["tab__content-text"]}>Width - 19.6 mm</p>
                  <p className={styles["tab__content-text"]}>Height - 2.3 mm</p>
                  <p className={styles["tab__content-text"]}>
                    Purity - 24 Karet
                  </p>
                  <p className={styles["tab__content-text"]}>
                    Size - 11/50.2 mm (Medium)
                  </p>
                </div>
              </div>
              <div className={styles["tab__content-box"]}>
                <h5 className={styles["tab__content-title"]}>
                  Diamond Information
                </h5>
                <div className={styles["tab__content-texts"]}>
                  <p className={styles["tab__content-text"]}>
                    Gross Weight - 2.332 g
                  </p>
                  <p className={styles["tab__content-text"]}>Width - 19.6 mm</p>
                  <p className={styles["tab__content-text"]}>Height - 2.3 mm</p>
                  <p className={styles["tab__content-text"]}>
                    Purity - 24 Karet
                  </p>
                  <p className={styles["tab__content-text"]}>
                    Size - 11/50.2 mm (Medium)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["tab__content"]}>
            <h4 className={styles["tab__content-heading"]}>Services</h4>
            <div className={styles["tab__content-boxes"]}>
              <div className={styles["tab__content-box"]}>
                <h5 className={styles["tab__content-title"]}>
                  Services Information
                </h5>
                <div className={styles["tab__content-texts"]}>
                  <p className={styles["tab__content-text"]}>
                    Expected Shipping Date - 17 Jan 2023
                  </p>
                  <p className={styles["tab__content-text"]}>
                    Easy Returns (Days) - 15 Days
                  </p>
                  <p className={styles["tab__content-text"]}>
                    Lifetime Exchange - Not Applicable
                  </p>
                  <p className={styles["tab__content-text"]}>
                    Purity - 24 Karet
                  </p>
                  <p className={styles["tab__content-text"]}>
                    Lifetime Buyback - Not Applicable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsTabSection;
