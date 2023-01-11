import React from "react";
import styles from "../../styles/Profile.module.scss";

const ProfileForm = () => {
  return (
    <div className={styles["profile-container"]}>
      <section className={styles["profile"]}>
        <div className={styles["profile__header"]}>
          <h5 className={styles["profile__heading"]}>My Profile </h5>
        </div>

        <form className={styles["profile__form"]}>
          <div className={styles["profile__form-group"]}>
            <label htmlFor="email" className={styles["profile__label"]}>
              Email Address:
            </label>
            <input type="email" className={styles["profile__input"]} />
          </div>
          <div className={styles["profile__form-group"]}>
            <label htmlFor="name" className={styles["profile__label"]}>
              Full Name:
            </label>
            <input type="text" className={styles["profile__input"]} />
          </div>
          <div className={styles["profile__form-group"]}>
            <label htmlFor="date" className={styles["profile__label"]}>
              Date of Birth:
            </label>
            <input type="date" className={styles["profile__input"]} />
          </div>
          <div className={styles["profile__form-group"]}>
            <label htmlFor="language" className={styles["profile__label"]}>
              Language:
            </label>
            <input type="text" className={styles["profile__input"]} />
          </div>
          <div className={styles["profile__form-group"]}>
            <button className={`${styles["profile__btn"]} ${["btn__primary"]}`}>
              Save Changes
            </button>
          </div>
        </form>
      </section>

      <section className={styles["profile"]}>
        <div className={styles["profile__header"]}>
          <h5 className={styles["profile__heading"]}>Address </h5>
        </div>

        <form className={styles["profile__form"]}>
          <div className={styles["profile__form-group"]}>
            <label htmlFor="address1" className={styles["profile__label"]}>
              Address 1:
            </label>
            <input type="text" className={styles["profile__input"]} />
          </div>
          <div className={styles["profile__form-group"]}>
            <label htmlFor="address2" className={styles["profile__label"]}>
              Address 2:
            </label>
            <input type="text" className={styles["profile__input"]} />
          </div>
          <div className={styles["profile__form-group"]}>
            <label htmlFor="mobileNumber" className={styles["profile__label"]}>
              Mobile No:
            </label>
            <input type="number" className={styles["profile__input"]} />
          </div>
          <div className={styles["profile__form-group"]}>
            <label htmlFor="country" className={styles["profile__label"]}>
              Country:
            </label>
            <input type="text" className={styles["profile__input"]} />
          </div>
          <div className={styles["profile__form-group"]}>
            <label htmlFor="state" className={styles["profile__label"]}>
              State/Province:
            </label>
            <input type="text" className={styles["profile__input"]} />
          </div>
          <div className={styles["profile__form-group"]}>
            <label htmlFor="city" className={styles["profile__label"]}>
              City:
            </label>
            <input type="text" className={styles["profile__input"]} />
          </div>
          <div className={styles["profile__form-group"]}>
            <label htmlFor="zipCode" className={styles["profile__label"]}>
              Zip Code:
            </label>
            <input type="text" className={styles["profile__input"]} />
          </div>

          <div className={styles["profile__form-group"]}>
            <button className={`${styles["profile__btn"]} ${["btn__primary"]}`}>
              Save Changes
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ProfileForm;
