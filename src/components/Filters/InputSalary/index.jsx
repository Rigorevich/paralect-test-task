import React from "react";
import styles from "./InputSalary.module.css";
import sm_arrow from "@images/sm_arrow.svg";

function InputSalary({ placeholder = "lox" }) {
  return (
    <div className={styles.salary__input}>
      <input placeholder={placeholder} type="number" />
      <div className={styles.input__arrows}>
        <img src={sm_arrow} alt="arrow" />
        <img src={sm_arrow} alt="arrow" />
      </div>
    </div>
  );
}

export default InputSalary;
