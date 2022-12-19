import Image from "next/image";
import React from "react";

import BlogDate from "../../public/blogDate.svg";
import BlogTime from "../../public/blogTime.svg";

import styles from "../../styles/BlogCard.module.scss";

const BlogCard = () => {
  return (
    <div className={styles["blog"]}>
      <div className={styles["blog__img-container"]}>
        <Image
          src="/blog1.png"
          alt="Blog1"
          className={styles["blog__img"]}
          fill
        />
      </div>
      <div className={styles["blog__texts"]}>
        <h4 className={styles["blog__heading"]}>
          Three jewelery gifting ideas for any occasion
        </h4>
        <p className={styles["blog__btn"]}>Read More</p>
        <div className={styles["blog__dateAndTime"]}>
          <div className={styles["blog__times"]}>
            <BlogTime alt="BlogTime" className={styles["blog__svg"]} />
            <span className={styles["blog__time"]}>5 min</span>
          </div>
          <div className={styles["blog__dates"]}>
            <BlogDate alt="BlogDate" className={styles["blog__svg"]} />
            <span className={styles["blog__date"]}>12th Oct 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
