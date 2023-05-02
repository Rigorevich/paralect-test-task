import React, { useEffect } from "react";
import styles from "./SelectBranch.module.css";
import lg_arrow from "@images/lg_arrow.svg";

import { Select } from "@mantine/core";
import { useDispatch } from "react-redux";
import { setFilters } from "@store/slices/vacanciesSlice";

function SelectBranch({
  selectedValue,
  setSelectedValue,
  catalogs,
  catalogsStatus,
  catalogsError,
}) {
  const data = catalogsStatus ? [] : catalogs.map((item) => item.title_rus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (catalogsStatus) return;
    const item = catalogs.find((item) => item.title_rus === selectedValue);
    dispatch(setFilters({ catalogues: item }));
  }, [selectedValue]);

  const handleSelectChange = (catalog) => {
    setSelectedValue(catalog);
  };

  if (catalogsError) {
    return <div>Произошла ошибка</div>;
  }

  return (
    <div className={styles.branch}>
      <h4 className={styles.branch__title}>Отрасль</h4>
      <Select
        data-elem="industry-select"
        allowDeselect
        radius="md"
        value={selectedValue}
        onChange={handleSelectChange}
        styles={{
          rightSection: { pointerEvents: "none" },
          item: {
            whiteSpace: "normal",
            wordWrap: "break-word",
            overflowWrap: "break-word",
          },
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
        placeholder="Выберете отрасль"
        rightSection={<img src={lg_arrow} />}
        data={data}
      />
    </div>
  );
}

export default SelectBranch;
