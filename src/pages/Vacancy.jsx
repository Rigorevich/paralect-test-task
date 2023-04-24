import React from "react";
import { useParams } from "react-router-dom";

function Vacancy() {
  const { id } = useParams();

  return <div>Vacancy #{id}</div>;
}

export default Vacancy;
