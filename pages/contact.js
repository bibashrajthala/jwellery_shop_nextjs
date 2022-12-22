import React from "react";
import axios from "axios";

import ContactFormSection from "../components/contact/ContactFormSection";
import ContactMapSection from "../components/contact/ContactMapSection";

import styles from "../styles/ContactPage.module.scss";

const contact = ({ contactDetails }) => {
  // console.log(contactDetails);
  return (
    <div className={styles["contacts"]}>
      <ContactFormSection contactDetails={contactDetails} />

      <ContactMapSection />
    </div>
  );
};

export default contact;

export const getServerSideProps = async () => {
  const response = await axios.get("http://offerkcha.com/api/contact");
  const contactDetails = await response.data.data;

  return {
    props: {
      contactDetails,
    },
  };
};
