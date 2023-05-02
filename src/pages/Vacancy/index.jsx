import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Vacancy.module.css";

import { useFetch } from "../../hooks/useFetch";
import { VACANCIES_URL } from "../../constants";
import BoardItem from "../../components/BoardItem";
import Description from "../../components/Description";

import { Loader } from "@mantine/core";

function Vacancy() {
  const { id } = useParams();
  const [vacancy, loading, error] = useFetch(VACANCIES_URL + id);

  if (error) {
    return <div>Error :(</div>;
  }

  return (
    <div className={styles.wrapper}>
      {loading ? (
        <Loader size="xl" style={{ margin: "auto" }} />
      ) : (
        <>
          <BoardItem vacancy={vacancy} style />
          <Description vacancy={vacancy} />
        </>
      )}
    </div>
  );
}

export default Vacancy;
