import React from "react";

import HeadingLeft from "../../public/headingLeft.svg";
import HeadingRight from "../../public/headingRight.svg";

import styles from "../../styles/Heading.module.scss";

const Heading = ({ headingLabel }) => {
  return (
    <div className={styles["heading-container"]}>
      <HeadingLeft className={styles["heading-svg"]} />
      <h2 className={styles["heading"]}>{headingLabel}</h2>
      <HeadingRight className={styles["heading-svg"]} />
    </div>
  );
};

export default Heading;
