import React, { useState } from "react";
import search from "@images/search.svg";
import styles from "./Search.module.css";

import { useDispatch } from "react-redux";
import { setFilters, fetchVacancies } from "@store/slices/vacanciesSlice";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const handleClickBtn = () => {
    dispatch(setFilters({ page: 1, keyword: searchInput }));
    dispatch(fetchVacancies());
  };

  return (
    <div className={styles.board__search}>
      <img className={styles.search__image} src={search} alt="search" />
      <input
        placeholder="Введите название вакансии"
        data-elem="search-input"
        className={styles.search__input}
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        onClick={handleClickBtn}
        data-elem="search-button"
        className={styles.search__button}
      >
        Поиск
      </button>
    </div>
  );
}

export default Search;
