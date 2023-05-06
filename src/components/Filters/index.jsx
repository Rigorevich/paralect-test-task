import React, { useState } from "react";
import styles from "./Filters.module.css";
import cross from "../../assets/images/cross.svg";
import arrowsSvg from "../../assets/images/arrows.svg";

import SelectBranch from "../SelectBranch";

import { Input } from "@mantine/core";
import { CATALOG_URL } from "../../constants";
import { useForm } from "react-hook-form";
import { useFetch } from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import {
  fetchVacancies,
  setDefaultFilters,
  setFilters,
} from "../../store/slices/vacanciesSlice";

function Filters() {
  const [catalogs, catalogsStatus, catalogsError] = useFetch(CATALOG_URL);
  const [payment_from, setPaymentFrom] = useState("");
  const [payment_to, setPaymentTo] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(setFilters({ page: 1, payment_from, payment_to }));
    dispatch(fetchVacancies());
  };

  const handleClickClean = () => {
    setSelectedValue("");
    setPaymentFrom("");
    setPaymentTo("");
    dispatch(setDefaultFilters());
  };

  return (
    <div className={styles.wrapper}>
      <form
        className={styles.filter__content}
        onSubmit={handleSubmit(onSubmit)}
      >
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
              {...register("payment_from")}
              value={payment_from}
              onChange={(e) => setPaymentFrom(e.target.value)}
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
              {...register("payment_to")}
              value={payment_to}
              onChange={(e) => setPaymentTo(e.target.value)}
            />
          </div>
        </div>
        <button data-elem="search-button" className={styles.filter__button}>
          Применить
        </button>
      </form>
    </div>
  );
}

export default Filters;
