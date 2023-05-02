import React, { useState } from "react";
import styles from "./Filters.module.css";
import cross from "@images/cross.svg";
import arrowsSvg from "@images/arrows.svg";

import SelectBranch from "@components/SelectBranch";

import { Input } from "@mantine/core";
import { CATALOG_URL } from "@constants";
import { useFetch } from "@hooks/useFetch";
import { useDispatch } from "react-redux";
import {
  fetchVacancies,
  setDefaultFilters,
  setFilters,
} from "@store/slices/vacanciesSlice";

function Filters() {
  const [catalogs, catalogsStatus, catalogsError] = useFetch(CATALOG_URL);
  const [payment_from, setPaymentFrom] = useState("");
  const [payment_to, setPaymentTo] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const dispatch = useDispatch();

  const handleClickApply = () => {
    dispatch(setFilters({ page: 1, payment_from, payment_to }));
    dispatch(fetchVacancies());
  };

  const handleClickClean = () => {
    setSelectedValue("");
    setPaymentFrom("");
    setPaymentTo("");
    dispatch(setDefaultFilters());
  };

  const handleBlurFrom = () => {
    if (payment_from.trim() === "" || Number.isNaN(Number(payment_from))) {
      setPaymentFrom("");
    }
  };

  const handleBlurTo = () => {
    if (payment_to.trim() === "" || Number.isNaN(Number(payment_to))) {
      setPaymentTo("");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.filter__content}>
        <div className={styles.filter__info}>
          <h3 className={styles.info__title}>Фильтры</h3>
          <div className={styles.info__clean} onClick={handleClickClean}>
            <span>Сбросить все</span>
            <img src={cross} alt="cross" />
          </div>
        </div>
        <SelectBranch
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          catalogs={catalogs}
          catalogsStatus={catalogsStatus}
          catalogsError={catalogsError}
        />
        <div className={styles.filter__salary}>
          <h4 className={styles.salary__title}>Оклад</h4>
          <div className={styles.salary__inputs}>
            <Input
              data-elem="salary-from-input"
              radius="md"
              type="number"
              min={0}
              placeholder="От"
              rightSection={<img src={arrowsSvg} alt="arrows" />}
              styles={{
                input: {
                  "&": {
                    fontFamily: "Inter",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#acadb9",
                  },
                  ":focus": {
                    outline: "none",
                    borderColor: "#acadb9",
                  },
                },
              }}
              value={payment_from}
              onChange={(e) => setPaymentFrom(e.target.value)}
              onBlur={handleBlurFrom}
            />
            <Input
              data-elem="salary-to-input"
              radius="md"
              type="number"
              min={0}
              placeholder="До"
              rightSection={<img src={arrowsSvg} alt="arrows" />}
              styles={{
                input: {
                  "&": {
                    fontFamily: "Inter",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#acadb9",
                  },
                  ":focus": {
                    outline: "none",
                    borderColor: "#acadb9",
                  },
                },
              }}
              value={payment_to}
              onChange={(e) => setPaymentTo(e.target.value)}
              onBlur={handleBlurTo}
            />
            {/* <InputSalary
              placeholder="От"
              data_elem="salary-from-input"
              value={payment_from}
              onChangeInput={handlePaymentFrom}
            />
            <InputSalary
              placeholder="До"
              data_elem="salary-to-input"
              value={payment_to}
              onChangeInput={handlePaymentTo}
            /> */}
          </div>
        </div>
        <button
          data-elem="search-button"
          className={styles.filter__button}
          onClick={handleClickApply}
        >
          Применить
        </button>
      </div>
    </div>
  );
}

export default Filters;
