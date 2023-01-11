import React from "react";

import styles from "../../styles/Orders.module.scss";
import SingleOrderItem from "./SingleOrderItem";

const OrdersList = () => {
  return (
    <section className={styles["orders-container"]}>
      <div className={styles["orders"]}>
        <div className={styles["orders__header"]}>
          <h5 className={styles["orders__heading"]}>My Orders </h5>
        </div>

        <div className={styles["orders__list"]}>
          {Array(5)
            .fill(2)
            .map((e, i) => (
              <SingleOrderItem key={i} />
            ))}
        </div>
      </div>
      <div className={styles["orders"]}>
        <div className={styles["orders__header"]}>
          <h5 className={styles["orders__heading"]}>My Cancellations </h5>
        </div>

        <div className={styles["orders__list"]}>
          {Array(5)
            .fill(2)
            .map((e, i) => (
              <SingleOrderItem key={i} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default OrdersList;
