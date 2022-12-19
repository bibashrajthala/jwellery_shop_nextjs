import React from "react";

import styles from "../../styles/ContactPage.module.scss";

const ContactMapSection = () => {
  return (
    <section className={styles["map"]}>
      <iframe
        title="intopros"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9818955635255!2d85.31282731453787!3d27.6869544329958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193d0960b993%3A0x887686c1ced6cb56!2sIntopros%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1671003153701!5m2!1sen!2snp"
        // width="800"
        // height="600"
        style={{ border: "none", width: "100vw", height: "30rem" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default ContactMapSection;
