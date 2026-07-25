import React from "react";

export const Pagination = ({ page, setPage, totalPages }) => {
  const handlePrev = () => {

    console.log("page",page)
    if (page == 1) {
      return;
    } else {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page == totalPages) {
      return;
    } else {
      setPage(page + 1);
    }
  };

  return (
    <div className="join float-end mt-1 mr-1 ">
      <button onClick={handlePrev} className="join-item btn bg-white text-teal-900">← Prev </button>
      <button className="join-item btn text-white bg-pink-700">
        Page {page}/{totalPages}
      </button>

      <button onClick={handleNext} className="join-item btn bg-white text-teal-900 ">Next →</button>
    </div>
  );
};
