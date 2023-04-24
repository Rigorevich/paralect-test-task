import React from "react";
import logo from "../../assets/images/Union.svg";
import styles from "./Header.module.css";

import { Link, useLocation } from "react-router-dom";

// import {
//   createStyles,
//   Title,
//   Image,
//   Header,
//   Container,
//   Group,
//   Box,
// } from "@mantine/core";
// import { Link } from "react-router-dom";

// const useStyles = createStyles((theme) => ({
//   header: {
//     minHeight: "84px",
//     display: "flex",
//   },
//   inner: {
//     display: "flex",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     gap: "280px",
//     padding: "10px 162px",
//   },
//   logo: {
//     display: "flex",
//     alignItems: "center",
//   },
//   links: {
//     display: "flex",
//     gap: "60px",
//   },
// }));

// function HeaderBlock() {
//   const { classes } = useStyles();

//   return (
//     <Header className={classes.header}>
//       <Box className={classes.inner}>
//         <Group className={classes.logo}>
//           <Image maw={30} src={union} />
//           <Title order={2}>
//             <Link to="/">Jobored</Link>
//           </Title>
//         </Group>
//         <Group className={classes.links}>
//           <Link to="/">Поиск вакансий</Link>
//           <Link to="/favorites">Избранное</Link>
//         </Group>
//       </Box>
//     </Header>
//   );
// }

// export default HeaderBlock;

function Header() {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <img src={logo} alt="logo" />
          <h2>Jobored</h2>
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
      </div>
    </header>
  );
}

export default Header;
