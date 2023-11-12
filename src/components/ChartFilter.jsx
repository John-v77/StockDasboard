import React from "react";

function ChartFilter({ text, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-10 m-2 h-7 border rounded-md flex items-center justify-center cursor-pointer ${
        active
          ? "bg-indigo-600   text-gray-100"
          : "border-indigo-500 text-indigo-300"
      }`}
    >
      {text}
    </button>
  );
}

export default ChartFilter;
