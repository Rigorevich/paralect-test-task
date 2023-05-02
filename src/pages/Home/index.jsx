import React, { useEffect } from "react";
import Container from "@components/Container";
import Filters from "@components/Filters";
import JobBoard from "@components/JobBoard";
import styles from "./Home.module.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchVacancies } from "@store/slices/vacanciesSlice";

function Home() {
  const { vacancies, loading, error, total } = useSelector(
    (state) => state.vacancies
  );
  const { page, count } = useSelector((state) => state.vacancies.filters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVacancies());
  }, [page, count]);

  const params = {
    vacancies,
    loading,
    total: total > 125 ? 125 : Math.ceil(total / count) - 1,
    page,
    error,
  };

  return (
    <main className={styles.main}>
      <Container className={styles.main__container}>
        <Filters />
        <JobBoard {...params} />
      </Container>
    </main>
  );
}

export default Home;
