import React from "react";
import Image from "next/image";

import Star from "../../public/EmptyStar.svg";
import EmptyStar from "../../public/EmptyStar.svg";
import ProductIcon1 from "../../public/ProductIcon1-productDetail.svg";
import ProductIcon2 from "../../public/productIcon2-productDetail.svg";
import ProductIcon3 from "../../public/productIcon3-productDetail.svg";
import ProductIcon4 from "../../public/productIcon4-productDetail.svg";
import ProductIcon5 from "../../public/productIcon5-productDetail.svg";
import ProductIcon6 from "../../public/productIcon6-productDetail.svg";
import ProductFavouriteIcon from "../../public/productFavouriteIcon-productDetail.svg";

import styles from "../../styles/ProductDetailPage.module.scss";

const ProductDetailProductSection = () => {
  return (
    <section className={styles["product"]}>
      <div className={styles["product__images"]}>
        <div className={styles["product__side-images"]}>
          <div className={styles["product__side-image-container"]}>
            <Image
              fill
              src="/productSideImage1-productDetail.png"
              alt="ProductSideImage1"
              className={styles["product__side-image "]}
            />
          </div>
          <div className={styles["product__side-image-container"]}>
            <Image
              fill
              src="/productSideImage1-productDetail.png"
              alt="ProductSideImage2"
              className={styles["product__side-image "]}
            />
          </div>
          <div className={styles["product__side-image-container"]}>
            <Image
              fill
              src="/productSideImage2-productDetail.png"
              alt="ProductSideImage3"
              className={styles["product__side-image "]}
            />
          </div>
          <div className={styles["product__side-image-container"]}>
            <Image
              fill
              src="/productSideImage4-productDetail.png"
              alt="ProductSideImage4"
              className={styles["product__side-image"]}
            />
          </div>
        </div>
        <div className={styles["product__main-image-container"]}>
          <Image
            src="/productMainImage-productDetail.png"
            alt="ProductMainImage"
            className={styles["product__main-image"]}
            fill
          />
        </div>
      </div>
      <div className={styles["product__right"]}>
        <div className={styles["product__info"]}>
          <div className={styles["product__texts"]}>
            <div className={styles["product__summary"]}>
              <div className={styles["prodcut__summary-top"]}>
                <h4 className={styles["product__name"]}>Blue Diamond Ring</h4>
                <div className={styles["product__price-box"]}>
                  <p className={styles["product__price"]}>Rs.70,0000</p>
                  <p className={styles["product__price--cut"]}>Rs.90,00</p>
                  <p className={styles["product__price--discount"]}>15% OFF</p>
                  <p className={styles["product__status"]}>In Stock</p>
                </div>
                <p className={styles["product__special-feature"]}>
                  Set in 24 Karet Gold (2.332 g)
                </p>
                <a
                  href="#4
              "
                  className={styles["product__link-to-detail"]}
                >
                  Product Details
                </a>
              </div>

              <div className={styles["product__review-box"]}>
                <div className={styles["product__review-stars"]}>
                  <Star className={styles["product__review-star"]} />
                  <Star className={styles["product__review-star"]} />
                  <Star className={styles["product__review-star"]} />
                  <Star className={styles["product__review-star"]} />
                  <EmptyStar className={styles["product__review-star"]} />
                </div>
                <div className={styles["product__review"]}>
                  <p className={styles["product__review-numbers"]}>
                    4 Reviews(s)
                  </p>
                  <a
                    href="#4"
                    className={styles["product__review-link-to-add"]}
                  >
                    Add Your Review
                  </a>
                </div>
              </div>
            </div>
            <hr />
            <div className={styles["product__description"]}>
              <h6 className={styles["product__description-heading"]}>
                Description:
              </h6>
              <p className={styles["product__description-text"]}>
                Rustic, natural, often made of bark-covered logs or simple
                planks. Look for junk shop finds when in the country (for
                authenticity), or purchase hand-made new versions.Rustic,
                natural, often made of bark-covered logs or simple planks. Look
                for junk shop finds when in the country (for authenticity), or
                purchase hand-made new versions. when in the country (for
                authenticity), or purchase hand-made.Rustic, natural, often made
                of bark-covered logs or simple planks. Look for junk shop finds
                when in the country (for authenticity), or purchase{" "}
              </p>
            </div>
            <hr />
            <div className={styles["product__stockAndSize"]}>
              <div className={styles["product__stock"]}>
                <h6 className={styles["product__stock-heading"]}>
                  Availability:
                </h6>
                <p className={styles["product__stock-text"]}>
                  In Stock 10 Items(s)
                </p>
              </div>
              <div className={styles["product__size"]}>
                <h6 className={styles["product__size-heading"]}>Size:</h6>
                <select
                  name=""
                  id=""
                  className={styles["product__size-select"]}
                >
                  <option disabled selected value="">
                    Select Size
                  </option>
                </select>
                <a href="#4" className={styles["product__size-link-to-chart"]}>
                  Size chart
                </a>
              </div>
            </div>
          </div>
          <div className={styles["product__icons"]}>
            <button className={styles["product__icon-container"]}>
              <ProductIcon1 className={styles["product__icon"]} />
            </button>
            <button className={styles["product__icon-container"]}>
              <ProductIcon2 className={styles["product__icon"]} />
            </button>
            <button className={styles["product__icon-container"]}>
              <ProductIcon3 className={styles["product__icon"]} />
            </button>
            <button className={styles["product__icon-container"]}>
              <ProductIcon4 className={styles["product__icon"]} />
            </button>
            <button className={styles["product__icon-container"]}>
              <ProductIcon5 className={styles["product__icon"]} />
            </button>
            <button className={styles["product__icon-container"]}>
              <ProductIcon6 className={styles["product__icon"]} />
            </button>
          </div>
        </div>
        <div className={styles["product__btns"]}>
          <button className={styles["product__btn--add"]}>Add to cart</button>
          <button className={styles["product__btn--buy"]}>Buy Now</button>
          <button className={styles["product__btn--favourite-icon-container"]}>
            <ProductFavouriteIcon
              className={styles["product__btn--favourite-icon"]}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailProductSection;
