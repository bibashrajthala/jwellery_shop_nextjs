import React from "react";
import OrdersList from "../components/orders/OrdersList";
import SettingsAndOrders from "../components/shared/SettingsAndOrders";

import styles from "../styles/Orders.module.scss";

const Orders = () => {
  return (
    <div className={styles["ordersPage"]}>
      <SettingsAndOrders />

      <OrdersList />
    </div>
  );
};

export default Orders;
