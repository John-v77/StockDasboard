import React, { useContext } from "react";
import StockContext from "../context/StockContext";
import ThemeContext from "../context/ThemeContext";

function SearchResults({ results, clear }) {
  const { setStockSymbol, stockSymbol } = useContext(StockContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <ul
      className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll  ${
        darkMode
          ? "bg-gray-600 border-gray-700 custom-scrollbar custom-scrollbar-dark"
          : "bg-white border-neutral-200 custom-scrollbar"
      }`}
    >
      {results.map((item) => {
        return (
          <li
            key={item.symbol}
            className={`cursor-pointer p-4 m-2 text-sm flex items-center justify-between rounded-md   ${
              darkMode ? "hover:bg-indigo-700" : "hover:bg-indigo-200"
            }`}
            onClick={() => {
              setStockSymbol(item.symbol);
              clear();
            }}
          >
            <span>{item.symbol}</span>
            <span>{item.description}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default SearchResults;
