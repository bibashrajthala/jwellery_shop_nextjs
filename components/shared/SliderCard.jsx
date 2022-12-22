import React from "react";
import Image from "next/image";

import EmptyStar from "../../public/EmptyStar.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import styles from "../../styles/SliderCard.module.scss";

function SliderCard({ product }) {
  const { title, photo, discount, price } = product;
  return (
    <div className={styles["card"]}>
      <div className={styles["card__img-container"]}>
        <Image
          src={photo}
          // src="/cardImage1.png"
          fill
          alt="Card Image"
          className={styles["card__img"]}
        />

        <div className={styles["card__icons"]}>
          <div className={styles["card__icon-container"]}>
            <BsCart2 className={styles["card__icon"]} />
          </div>
          <div className={styles["card__icon-container"]}>
            <HiOutlineMagnifyingGlassPlus className={styles["card__icon"]} />
          </div>
          <div className={styles["card__icon-container"]}>
            <MdOutlineFavoriteBorder className={styles["card__icon"]} />
          </div>
        </div>
      </div>
      <div className={styles["card__texts"]}>
        <h3 className={styles["card__title"]}>{title}</h3>
        <p className={styles["card__prices"]}>
          <span className={styles["card__price"]}>
            Rs.{price - (discount / 100) * price}
          </span>
          <del className={styles["card__cut-price"]}>Rs.{price}</del>
        </p>

        <div className={styles["card__stars"]}>
          <EmptyStar className={styles["card__star"]} />
          <EmptyStar className={styles["card__star"]} />
          <EmptyStar className={styles["card__star"]} />
          <EmptyStar className={styles["card__star"]} />
          <EmptyStar
            className={`${styles["card__star"]}  ${styles["card__star-empty"]}`}
          />
        </div>
      </div>
    </div>
  );
}

export default SliderCard;
