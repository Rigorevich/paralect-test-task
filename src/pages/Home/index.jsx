import React from "react";
import Container from "@components/Container";
import Filters from "@components/Filters";
import JobBoard from "@components/JobBoard";

import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.main}>
      <Container className={styles.main__container}>
        <Filters />
        <JobBoard />
      </Container>
    </main>
  );
}

export default Home;
