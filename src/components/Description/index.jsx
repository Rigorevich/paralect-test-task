import React, { useEffect, useState } from "react";
import styles from "./Description.module.css";

function Description({ vacancy }) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(vacancy.vacancyRichText, "text/html");
    const body = doc.querySelector("body").innerHTML;
    setHtml(body);
  }, []);

  return (
    <div className={styles.board__item}>
      <div
        className={styles.item__content}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}

export default Description;
