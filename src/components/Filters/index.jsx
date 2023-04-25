import React from "react";
import styles from "./Filters.module.css";
import cross from "@images/cross.svg";

import SelectBranch from "@components/SelectBranch";
import InputSalary from "@components/InputSalary";

function Filters() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filter__content}>
        <div className={styles.filter__info}>
          <h3 className={styles.info__title}>Фильтры</h3>
          <span className={styles.info__clean}>Сбросить все</span>
          <img className={styles.info__close} src={cross} alt="cross" />
        </div>
        <SelectBranch />
        <div className={styles.filter__salary}>
          <h4 className={styles.salary__title}>Оклад</h4>
          <div className={styles.salary__inputs}>
            <InputSalary placeholder="От" />
            <InputSalary placeholder="До" />
          </div>
        </div>
        <button className={styles.filter__button}>Применить</button>
      </div>
    </div>
  );
}

export default Filters;
