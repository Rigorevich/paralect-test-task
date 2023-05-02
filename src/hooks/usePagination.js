import { useState } from "react";

function usePagination(data, itemsPerPage = 4) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  return { setCurrentPage, currentPage, currentData, totalPages };
}

export default usePagination;
