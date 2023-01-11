import React from "react";
import { Modal } from "antd";

import FacebookIcon from "../../public/facebookIcon.svg";
import GoogleIcon from "../../public/googleIcon.svg";
import TwitterIcon from "../../public/twitterIcon.svg";
import Line from "../../public/line.svg";

import OrderModalIcon from "../../public/orderModalIcon.svg";

import styles from "../../styles/CustomModal.module.scss";
import SingleReview from "../productDetail/SingleReview";

const CustomModal = ({
  isModalOpen,
  handleCancel,
  handleOk,
  element = "review",
}) => {
  const Login = () => {
    return (
      <div className={styles["login"]}>
        <div className={styles["login__top"]}>
          <div className={styles["login__header"]}>
            <h3 className={styles["login__heading"]}>Login</h3>
            <p className={styles["login__text"]}>
              Please login using account detail below.
            </p>
          </div>

          <form className={styles["login__form"]}>
            <div className={styles["login__form-top"]}>
              <div className={styles["login__form-inputs"]}>
                <input
                  type="email"
                  className={styles["login__form-input"]}
                  placeholder="Email Address"
                />
                <input
                  type="password"
                  className={styles["login__form-input"]}
                  placeholder="Password"
                />
              </div>

              <p className={styles["login__form-text"]}>
                Forgot your password?
              </p>
            </div>

            <div className={styles["login__form-bottom"]}>
              <button
                className={`btn__primary ${styles["login__form-button"]}`}
              >
                Login
              </button>
              <p className={styles["login__text"]}>
                Don’t have an Account?{" "}
                <span className={styles["login__form-text-link"]}>
                  Create account
                </span>
              </p>
            </div>
          </form>
        </div>
        <div className={styles["login__bottom"]}>
          <div className={styles["login__bottom-texts"]}>
            <Line />
            <p className={styles["login__bottom-text"]}>or continue with</p>
            <Line />
          </div>
          <div className={styles["login__icons"]}>
            <div
              className={`${styles["login__icon-container"]} ${styles["login__icon-container--facebook"]}`}
            >
              <FacebookIcon className={styles["login__icon"]} />
            </div>
            <div
              className={`${styles["login__icon-container"]} ${styles["login__icon-container--twitter"]}`}
            >
              <TwitterIcon className={styles["login__icon"]} />
            </div>
            <div
              className={`${styles["login__icon-container"]} ${styles["login__icon-container--google"]}`}
            >
              <GoogleIcon className={styles["login__icon"]} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Register = () => {
    return (
      <div className={styles["login"]}>
        <div className={styles["login__top"]}>
          <div className={styles["login__header"]}>
            <h3 className={styles["login__heading"]}>Register</h3>
            <p className={styles["login__text"]}>
              Please fill all the details below.
            </p>
          </div>

          <form className={styles["login__form"]}>
            <div className={styles["login__form-top"]}>
              <div className={styles["login__form-inputs"]}>
                <input
                  type="text"
                  className={styles["login__form-input"]}
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  className={styles["login__form-input"]}
                  placeholder="Email Address"
                />
                <input
                  type="password"
                  className={styles["login__form-input"]}
                  placeholder="Password"
                />
                <input
                  type="password"
                  className={styles["login__form-input"]}
                  placeholder="Confirm Password"
                />
              </div>

              <p className={styles["login__form-text"]}>
                Forgot your password?
              </p>
            </div>

            <div className={styles["login__form-bottom"]}>
              <button
                className={`btn__primary ${styles["login__form-button"]}`}
              >
                Register
              </button>
              <p className={styles["login__text"]}>
                Already have an Account?{" "}
                <span className={styles["login__form-text-link"]}>Sign In</span>
              </p>
            </div>
          </form>
        </div>
        <div className={styles["login__bottom"]}>
          <div className={styles["login__bottom-texts"]}>
            <Line />
            <p className={styles["login__bottom-text"]}>or continue with</p>
            <Line />
          </div>
          <div className={styles["login__icons"]}>
            <div
              className={`${styles["login__icon-container"]} ${styles["login__icon-container--facebook"]}`}
            >
              <FacebookIcon className={styles["login__icon"]} />
            </div>
            <div
              className={`${styles["login__icon-container"]} ${styles["login__icon-container--twitter"]}`}
            >
              <TwitterIcon className={styles["login__icon"]} />
            </div>
            <div
              className={`${styles["login__icon-container"]} ${styles["login__icon-container--google"]}`}
            >
              <GoogleIcon className={styles["login__icon"]} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const OrderCompleted = () => {
    return (
      <div className={styles["orderModal"]}>
        <OrderModalIcon />
        <div className={styles["orderModal__container"]}>
          <div className={styles["orderModal__texts"]}>
            <h4 className={styles["orderModal__heading"]}>
              Your Order Is Completed!{" "}
            </h4>
            <p className={styles["orderModal_text"]}>
              Thank you for your order! Your order is being processed and will
              be completed within 3-6 hours. You will receive an email
              confirmation when your order is completed.
            </p>
          </div>

          <button className={`${styles["orderModal__btn"]}  btn__primary`}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  };

  const FullReviews = () => {
    return (
      <div className={styles["reviews"]}>
        <div className={styles["reviews__header"]}>
          <h4 className={styles["reviews__heading"]}>Customer Reviews</h4>
        </div>
        <div className={styles["reviews__container"]}>
          {Array(10)
            .fill(1)
            .map((el, i) => (
              <SingleReview key={i} />
            ))}
        </div>
      </div>
    );
  };
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width={element === "review" ? 900 : 520}
    >
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <OrderCompleted /> */}
      <FullReviews />
    </Modal>
  );
};

export default CustomModal;
