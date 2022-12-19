import React from "react";
import Image from "next/image";

import EmptyStar from "../../public/EmptyStar.svg";

import styles from "../../styles/SliderCard.module.scss";

function SliderCard() {
  return (
    <div className={styles["card"]}>
      <div className={styles["card__img-container"]}>
        <Image
          src="/cardImage1.png"
          fill
          alt="Card Image"
          className={styles["card_img"]}
        />
      </div>
      <div className={styles["card__texts"]}>
        <h3 className={styles["card__title"]}>Blue Diamond Ring</h3>
        <p className={styles["card__prices"]}>
          <span className={styles["card__price"]}>Rs.145,000</span>
          <del className={styles["card__cut-price"]}>Rs.180,000</del>
        </p>

        <div className={styles["card__stars"]}>
          <EmptyStar className={styles["card__star"]} />
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
