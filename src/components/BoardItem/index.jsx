import React, { useState } from "react";
import styles from "./BoardItem.module.css";
import marker from "../../assets/images/marker.svg";
import star from "../../assets/images/star.svg";
import savedStar from "../../assets/images/savedStar.svg";
import { useNavigate } from "react-router-dom";

function BoardItem({ vacancy, style = false }) {
  const navigate = useNavigate();

  const [saved, setSaved] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));

    if (favorites && favorites.find((item) => item.id === vacancy.id)) {
      return true;
    }

    return false;
  });

  const handleClickStar = () => {
    const favorites = localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : [];
    if (!saved) {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, vacancy])
      );
    } else {
      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites.filter((item) => item.id !== vacancy.id))
      );
    }
    setSaved((prev) => !prev);
  };

  const handleClickLink = () => {
    if (style) return;
    navigate(`/vacancy/${vacancy.id}`);
  };

  return (
    <div className={styles.board__item}>
      <div className={style ? styles.item__content_d : styles.item__content}>
        <div
          className={style ? styles.item__title_d : styles.item__title}
          onClick={handleClickLink}
        >
          {vacancy.profession}
        </div>
        <div className={styles.item__info}>
          <span className={style ? styles.info__salary_d : styles.info__salary}>
            {vacancy.payment_from && vacancy.payment_to
              ? `з/п ${vacancy.payment_from} - ${vacancy.payment_to} `
              : vacancy.payment_from
              ? `з/п от ${vacancy.payment_from} `
              : `з/п до ${vacancy.payment_to} `}
            {vacancy.currency}
          </span>
          <span className={styles.info__dot}>•</span>
          <span className={style ? styles.info__duty_d : styles.info__duty}>
            {vacancy.type_of_work.title}
          </span>
        </div>
        <div className={styles.item__place}>
          <img className={styles.place__marker} src={marker} alt="marker" />
          <span className={styles.place__name}>{vacancy.town.title}</span>
        </div>
        <img
          data-elem={`vacancy-${vacancy.id}-shortlist-button`}
          className={styles.item__star}
          src={saved ? savedStar : star}
          onClick={handleClickStar}
          alt="star"
        />
      </div>
    </div>
  );
}

export default BoardItem;
