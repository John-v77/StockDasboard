import React from "react";

function ChartFilter({ text, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-10 m-2 h-7 border rounded-md flex items-center justify-center cursor-pointer ${
        active
          ? "bg-indigo-600 border-indigo-700  text-gray-100"
          : "border-indigo-500 text-indigo-300"
      }
      transition duration-300 hover:bg-indigo-600 hover:text-gray-100 hover:border-indigo-700
      `}
    >
      {text}
    </button>
  );
}

export default ChartFilter;
