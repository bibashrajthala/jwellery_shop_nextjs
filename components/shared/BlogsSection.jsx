import React from "react";

import BlogCard from "./BlogCard";

import styles from "../../styles/BlogsSection.module.scss";
import Heading from "./Heading";

const BlogsSection = () => {
  return (
    <section className={styles["blogs"]}>
      <Heading headingLabel="Blogs Updates" />

      <div className={styles["blogs__cards"]}>
        {[1, 2, 3, 4, 5].map((el, index) => (
          <BlogCard key={index} />
        ))}

        {/* // for last see more card */}
        {/* <div className="blog">
          <div className="blog__img-container">
            <img src={Blog6} alt="Blog6" className="blog__img" />
          </div>
          <div className="blog__texts">
            <h4 className="blog__heading">
              Three jewelery gifting ideas for any occasion
            </h4>
            <p className="blog__btn">Read More</p>
            <div className="blog__dateAndTime">
              <div className="blog__times">
                <img src={BlogTime} alt="BlogTime" />
                <span className="blog__time">5 min</span>
              </div>
              <div className="blog__dates">
                <img src={BlogDate} alt="BlogDate" />
                <span className="blog__date">12th Oct 2022</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default BlogsSection;
