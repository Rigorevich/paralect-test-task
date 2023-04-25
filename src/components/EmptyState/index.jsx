import React from "react";
import styles from "./EmptyState.module.css";
import img from "@images/Frame.png";
import { useNavigate } from "react-router-dom";

function EmptyState() {
  const navigate = useNavigate();

  return (
    <div className={styles.box}>
      <img src={img} alt="img" />
      <h3>Упс, здесь еще ничего нет!</h3>
      <button onClick={() => navigate("/")}>Поиск Вакансий</button>
    </div>
  );
}

export default EmptyState;
