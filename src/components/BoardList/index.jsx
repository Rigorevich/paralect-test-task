import React from "react";
import BoardItem from "@components/BoardItem";
import styles from "./BoardList.module.css";

function BoardList({ vacancies }) {
  return (
    <div className={styles.board__list}>
      {vacancies.map((vacancy) => (
        <BoardItem
          data-elem={`vacancy-${vacancy.id}`}
          vacancy={vacancy}
          key={vacancy.id}
        />
      ))}
    </div>
  );
}

export default BoardList;
