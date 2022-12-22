import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./NavLink";

import styles from "../../styles/Header.module.scss";

import UserIcon from "../../public/User.svg";
import HeaderLogo from "../../public/headerLogo.svg";
import HeaderIcon1 from "../../public/headerIcon1.svg";
import HeaderIcon2 from "../../public/headerIcon2.svg";
import HeaderIcon3 from "../../public/headerIcon3.svg";
import HeaderIcon4 from "../../public/headerIcon4.svg";

const Header = () => {
  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["header__top"]}>
          <div className={styles["header__top-contacts"]}>
            +977 9843765677 / contact@intopros.com
          </div>
          <div className={styles["header__top-right"]}>
            <span className={styles["header__top-rate"]}>
              Gold Rate: Rs. 7,982.00
            </span>
            <span className={styles["header__top-currency"]}>
              Currency: <b>NPR</b> USD
            </span>
            <span className={styles["header__top-login"]}>
              <UserIcon /> <span>Login</span>
            </span>
          </div>
        </div>

        <div className={styles["header__bottom"]}>
          <div className={styles["header__bottom-logo-container"]}>
            <HeaderLogo />
          </div>

          <nav className={styles["header__bottom-nav"]}>
            <ul className={styles["header__bottom-nav-list"]}>
              <li>
                {/* nav link with exact match so it only matches on the home page url '/' */}
                <NavLink
                  href="/"
                  exact
                  className={styles["header__bottom-nav-item"]}
                >
                  Home
                </NavLink>
              </li>
              <li>
                {/* nav link matching all urls beginning with '/about' */}
                <NavLink
                  href="/about"
                  className={styles["header__bottom-nav-item"]}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/products"
                  className={styles["header__bottom-nav-item"]}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/collections"
                  className={styles["header__bottom-nav-item"]}
                >
                  Collections
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/contact"
                  className={styles["header__bottom-nav-item"]}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className={styles["header__bottom-icons"]}>
            <HeaderIcon1 className={styles["header__bottom-icon"]} />
            <HeaderIcon2 className={styles["header__bottom-icon"]} />
            <HeaderIcon3 className={styles["header__bottom-icon"]} />
            <HeaderIcon4 className={styles["header__bottom-icon"]} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
