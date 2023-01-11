import React from "react";
import ProfileForm from "../components/profile/ProfileForm";
import SettingsAndOrders from "../components/shared/SettingsAndOrders";

import styles from "../styles/Profile.module.scss";

const Profile = () => {
  return (
    <div className={styles["settings"]}>
      <SettingsAndOrders />

      <ProfileForm />
    </div>
  );
};

export default Profile;
