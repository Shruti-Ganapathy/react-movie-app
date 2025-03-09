import React from "react";

const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <div className="flex justify-center items-center mt-8 space-x-4">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white shadow-lg disabled:opacity-50 transition-all"
      >
        Previous
      </button>
      <span className="px-4 py-2 text-lg font-semibold text-gray-300">
        Page {page} of {totalPages}
      </span>
      <button
        onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
        disabled={page >= totalPages}
        className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white shadow-lg disabled:opacity-50 transition-all"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
