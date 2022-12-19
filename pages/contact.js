import React from "react";
import ContactFormSection from "../components/contact/ContactFormSection";
import ContactMapSection from "../components/contact/ContactMapSection";

import styles from "../styles/ContactPage.module.scss";

const contact = () => {
  return (
    <div className={styles["contacts"]}>
      <ContactFormSection />

      <ContactMapSection />
    </div>
  );
};

export default contact;
