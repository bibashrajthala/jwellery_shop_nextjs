import { useRouter } from "next/router";
import { BiNotepad } from "react-icons/bi";
import { MdSettings } from "react-icons/md";

import styles from "../../styles/SettingsAndOrders.module.scss";

const SettingsAndOrders = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div className={styles["settings-container"]}>
      <div className={styles["settings"]}>
        <div
          className={
            currentRoute === "/profile"
              ? `${styles["settings__header"]} ${styles["settings__header--active"]}`
              : styles["settings__header"]
          }
          onClick={() => router.push("/profile")}
        >
          <MdSettings className={styles["settings__icon"]} />
          <h5 className={styles["settings__heading"]}>Settings</h5>
        </div>
        <ul className={styles["settings__items"]}>
          <li className={styles["settings__item"]}>My Profile</li>
          <li className={styles["settings__item"]}>Address</li>
        </ul>
      </div>
      <div className={styles["settings"]}>
        <div
          className={
            currentRoute === "/orders"
              ? `${styles["settings__header"]} ${styles["settings__header--active"]}`
              : styles["settings__header"]
          }
          onClick={() => router.push("/orders")}
        >
          <BiNotepad className={styles["settings__icon"]} />

          <h5 className={styles["settings__heading"]}>Orders</h5>
        </div>
        <ul className={styles["settings__items"]}>
          <li className={styles["settings__item"]}>My Order</li>
          <li className={styles["settings__item"]}>Cancellations</li>
        </ul>
      </div>
    </div>
  );
};

export default SettingsAndOrders;
