import React from "react";

import AboutHerosection from "../components/about/AboutHerosection";
import BlogsSection from "../components/shared/BlogsSection";
import AboutArticleSection from "../components/about/AboutArticleSection";
import AboutCheckSection from "../components/about/AboutCheckSection";

import styles from "../styles/AboutPage.module.scss";

const about = () => {
  return (
    <div className={styles["about"]}>
      <AboutHerosection />

      <AboutArticleSection />

      <AboutCheckSection />

      <BlogsSection />
    </div>
  );
};

export default about;
