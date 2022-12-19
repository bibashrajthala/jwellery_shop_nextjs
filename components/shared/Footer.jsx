import React from "react";
import styles from "../../styles/Footer.module.scss";

//footer
import FooterCallIcon from "../../public/footerCallIcon.svg";
import FooterIcon1 from "../../public/footerIcon1.svg";
import FooterIcon2 from "../../public/footerIcon2.svg";
import FooterIcon3 from "../../public/footerIcon3.svg";
import FooterIcon4 from "../../public/footerIcon4.svg";
import FooterLogo from "../../public/footerLogo.svg";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__top"]}>
        <div className={styles["footer__left"]}>
          <div className={styles["footer__texts"]}>
            <div className={styles["footer__logo-container"]}>
              <FooterLogo className={styles["footer__logo"]} />
            </div>
            <p className={styles["footer__text"]}>
              We provide the best Quality of products to you.We are always here
              to help our lovely customers. We provide the best Quality of
              products.
            </p>
          </div>
          <div className={styles["footer__icons"]}>
            <button className={styles["footer__icon-container"]}>
              <FooterIcon1 className={styles["footer__icon"]} />
            </button>
            <button className={styles["footer__icon-container"]}>
              <FooterIcon2 className={styles["footer__icon"]} />
            </button>

            <button className={styles["footer__icon-container"]}>
              <FooterIcon3 className={styles["footer__icon"]} />
            </button>

            <button className={styles["footer__icon-container"]}>
              <FooterIcon4 className={styles["footer__icon"]} />
            </button>
          </div>
        </div>
        <div className={styles["footer__right"]}>
          <div className={styles["footer__nav"]}>
            <h5 className={styles["footer__nav-heading"]}>Company</h5>
            <ul className={styles["footer__nav-list"]}>
              <li className={styles["footer__nav-item"]}>Career</li>
              <li className={styles["footer__nav-item"]}>About Us</li>
              <li className={styles["footer__nav-item"]}>Our Story</li>
              <li className={styles["footer__nav-item"]}>Press</li>
            </ul>
          </div>
          <div className={styles["footer__nav"]}>
            <h5 className={styles["footer__nav-heading"]}>Help & Support</h5>
            <ul className={styles["footer__nav-list"]}>
              <li className={styles["footer__nav-item"]}>FAQ</li>
              <li className={styles["footer__nav-item"]}>Terms of Service</li>
              <li className={styles["footer__nav-item"]}>
                Intellectual Property Claim
              </li>
              <li className={styles["footer__nav-item"]}>Privacy Policy</li>
              <li className={styles["footer__nav-item"]}>Cookies</li>
              <li className={styles["footer__nav-item"]}>
                Non-Discriminatory Statement
              </li>
              <li className={styles["footer__nav-item"]}>User Agreement</li>
            </ul>
          </div>
          <div className={styles["footer__call"]}>
            <div className={styles["footer__call-icon-container"]}>
              <FooterCallIcon className={styles["footer__call-icon"]} />
            </div>
            <div className={styles["footer__call-texts"]}>
              <p className={styles["footer__call-text"]}>Contact Number</p>
              <a
                href="tel:9861223344"
                className={styles["footer__call-number"]}
              >
                9861223344
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["footer__bottom"]}>
        <p>
          © 2022 <span>Intopros</span>. All Rights Reserved
        </p>
        <p>Home | About | Blog | Contact</p>
      </div>
    </footer>
  );
};

export default Footer;
