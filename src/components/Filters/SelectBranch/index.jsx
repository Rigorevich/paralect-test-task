import React, { useState } from "react";
import styles from "./SelectBranch.module.css";
import lg_arrow from "@images/lg_arrow.svg";

function SelectBranch() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const toggleOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.branch}>
      <h4 className={styles.branch__title}>Отрасль</h4>
      <div className={styles.branch__select}>
        <div className={styles.select__header} onClick={handleClick}>
          {selectedOption ? selectedOption : "Выберете отрасль"}
          <img
            style={{ transform: `${isOpen ? "rotate(180deg)" : "none"}` }}
            src={lg_arrow}
            alt="arrow"
          />
        </div>
        {isOpen && (
          <div className={styles.select__list_container}>
            <div className={styles.select__list}>
              <div className={styles.select__item}>Все отрасли</div>
              <div className={styles.select__item}>Программирование</div>
              <div className={styles.select__item}>Маркетинг</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectBranch;
