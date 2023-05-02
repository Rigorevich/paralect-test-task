import React from "react";
import logo from "@images/Union.svg";
import styles from "./Header.module.css";
import Container from "@components/Container";

import { Link, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <Container className={styles.header__container}>
        <div className={styles.header__logo}>
          <img src={logo} alt="logo" />
          <Link to="/">Jobored</Link>
        </div>
        <nav className={styles.header__menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <Link
                className={
                  pathname === "/"
                    ? styles.menu__link_active
                    : styles.menu__link
                }
                to="/"
              >
                Поиск Вакансий
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link
                className={
                  pathname === "/favorites"
                    ? styles.menu__link_active
                    : styles.menu__link
                }
                to="favorites"
              >
                Избранное
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
