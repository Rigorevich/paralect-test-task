import React, { useState } from "react";
import styles from "./Favorites.module.css";

import Container from "../../components/Container";
import EmptyState from "../../components/EmptyState";
import BoardList from "../../components/BoardList";
import usePagination from "../../hooks/usePagination";

import { Pagination } from "@mantine/core";

function Favorites() {
  const [favorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");

    if (savedFavorites) {
      return JSON.parse(savedFavorites);
    }

    return [];
  });
  const { setCurrentPage, currentPage, currentData, totalPages } =
    usePagination(favorites);

  return (
    <Container>
      {favorites.length ? (
        <div className={styles.wrapper}>
          <BoardList vacancies={currentData()} />
          <Pagination
            style={{ justifyContent: "center" }}
            total={totalPages}
            value={currentPage}
            onChange={setCurrentPage}
          />
        </div>
      ) : (
        <EmptyState />
      )}
    </Container>
  );
}

export default Favorites;
