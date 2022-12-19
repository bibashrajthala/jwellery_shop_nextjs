import React from "react";
import { MdEmail, MdLocationOn, MdCall } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";

import styles from "../../styles/ContactPage.module.scss";

const ContactFormSection = () => {
  return (
    <section className={styles["contact__section"]}>
      <div className={styles["contact__form-container"]}>
        <h3 className={styles["contact__form-heading"]}>Contact form style</h3>
        <hr />
        <form className={styles["contact__form"]}>
          <div className={styles["contact__form-credentials"]}>
            <div className={styles["contact__form-item"]}>
              <label htmlFor="" className={styles["contact__form-label"]}>
                Name
              </label>
              <input
                type="text"
                className={styles["contact__form-input"]}
                required
              />
            </div>
            <div className={styles["contact__form-item"]}>
              <label htmlFor="" className={styles["contact__form-label"]}>
                Email
              </label>
              <input
                type="text"
                className={styles["contact__form-input"]}
                required
              />
            </div>
          </div>
          <div className={styles["contact__form-item"]}>
            <label htmlFor="" className={styles["contact__form-label"]}>
              Subject
            </label>
            <input
              type="text"
              className={styles["contact__form-input"]}
              required
            />
          </div>
          <div className={styles["contact__form-item"]}>
            <label htmlFor="" className={styles["contact__form-label"]}>
              Phone
            </label>
            <input
              type="text"
              className={styles["contact__form-input"]}
              required
            />
          </div>
          <div className={styles["contact__form-item"]}>
            <label htmlFor="" className={styles["contact__form-label"]}>
              Message
            </label>
            <textarea
              rows={6}
              className={styles["contact__form-input"]}
              required
            />
          </div>
          <div className={styles["contact__form-item"]}>
            <button type="submit" className={styles["contact__form-btn"]}>
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className={styles["contact__info-container"]}>
        <h3 className={styles["contact__info-heading"]}>Contact Info Style</h3>
        <hr />
        <div className={styles["contact__info"]}>
          <div className={styles["contact__info-item"]}>
            <div className={styles["contact__info-icon-container"]}>
              <MdLocationOn className={styles["contact__info-icon"]} />
            </div>
            <div className={styles["contact__info-texts"]}>
              <h4 className={styles["contact__info-title"]}>
                Where to reach us
              </h4>
              <p className={styles["contact__info-text"]}>
                You can reach us at the following address
              </p>
              <p className={styles["contact__info-text--small"]}>
                Kupondole, Lalitpur, Kathmandu
              </p>
            </div>
          </div>
          <div className={styles["contact__info-item"]}>
            <div className={styles["contact__info-icon-container"]}>
              <MdEmail className={styles["contact__info-icon"]} />
            </div>
            <div className={styles["contact__info-texts"]}>
              <h4 className={styles["contact__info-title"]}>Email Us</h4>
              <p className={styles["contact__info-text"]}>
                Email your issues and suggestion for the following email
                addresses:
              </p>
              <p className={styles["contact__info-text--small"]}>
                intoprosnp@gmail.com
              </p>
            </div>
          </div>

          <div className={styles["contact__info-item"]}>
            <div className={styles["contact__info-icon-container"]}>
              <MdCall className={styles["contact__info-icon"]} />
            </div>
            <div className={styles["contact__info-texts"]}>
              <h4 className={styles["contact__info-title"]}>
                Need to call Us?
              </h4>

              <p className={styles["contact__info-text--small"]}>9861223344</p>
            </div>
          </div>
          <div className={styles["contact__info-item"]}>
            <div className={styles["contact__info-icon-container"]}>
              <FaQuestion className={styles["contact__info-icon"]} />
            </div>
            <div className={styles["contact__info-texts"]}>
              <h4 className={styles["contact__info-title"]}>
                WE HAVE GREAT SUPPORT
              </h4>

              <p className={styles["contact__info-text"]}>
                We provide the best Quality of products to you.We are always
                here to help our lovely customers.We ship our products anywhere
                with more secure. We provide the best Quality of products to
                you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
