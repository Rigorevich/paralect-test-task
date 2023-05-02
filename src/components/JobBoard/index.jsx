import React from "react";
import styles from "./JobBoard.module.css";

import Search from "../Search";
import BoardList from "../BoardList";
import EmptyState from "../EmptyState";

import { Loader, Pagination } from "@mantine/core";
import { useDispatch } from "react-redux";
import { setFilters } from "../../store/slices/vacanciesSlice";

function JobBoard({ vacancies, loading, total, page, error }) {
  const dispatch = useDispatch();

  const handleChangePage = (currentPage) => {
    dispatch(setFilters({ page: currentPage }));
  };

  if (error) {
    return <div>Произошла ошибка :(</div>;
  }

  return (
    <div className={styles.wrapper}>
      <Search />
      {loading ? (
        <Loader
          style={{ alignSelf: "center", marginTop: "200px" }}
          size="lg"
          variant="bars"
        />
      ) : (
        <>
          {vacancies.length ? (
            <>
              <BoardList vacancies={vacancies} />
              <Pagination
                value={page}
                onChange={handleChangePage}
                total={total}
                style={{ justifyContent: "center" }}
              />
            </>
          ) : (
            <EmptyState styleProp />
          )}
        </>
      )}
    </div>
  );
}

export default JobBoard;
