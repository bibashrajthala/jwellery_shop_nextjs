import React from "react";
import Image from "next/image";
import EmptyStar from "../../public/EmptyStar.svg";

import styles from "../../styles/CustomModal.module.scss";

const SingleReview = () => {
  return (
    <div className={styles["review"]}>
      <div className={styles["review__info"]}>
        <div className={styles["review__user"]}>
          <div className={styles["review__user-img-container"]}>
            <Image
              className={styles["review__user-img"]}
              src="/ReviewUserImage.png"
              alt="Review User"
              width={44}
              height={44}
            />
          </div>
          <div className={styles["review__user-info"]}>
            <p className={styles["review__user-name"]}>Arjuna Shrestha</p>
            <div className={styles["review__user-stars"]}>
              <EmptyStar className={styles["review__star"]} />
              <EmptyStar className={styles["review__star"]} />
              <EmptyStar className={styles["review__star"]} />
              <EmptyStar className={styles["review__star"]} />
              <EmptyStar className={styles["review__star"]} />
            </div>
          </div>
        </div>
        <p className={styles["review__text"]}>
          There’s no other program that walks you through exactly what you need
          to know to start an online store fast, written by someone who has
          built several 7-figure ecommerce businesses from scratch.
        </p>
      </div>
      <span className={styles["review__date"]}>22.03.2021</span>
    </div>
  );
};

export default SingleReview;
