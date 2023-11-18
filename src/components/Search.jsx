import React, { useContext } from "react";
import { useState } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import SearchResults from "./SearchResults";
import { searchSymbols } from "../api/Stocks-api";
import ThemeContext from "../context/ThemeContext";

function Search(props) {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);

  const { darkMode } = useContext(ThemeContext);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = async () => {
    try {
      if (input) {
        const result = await searchSymbols(input);
        setBestMatches(result);
      }
    } catch (err) {
      setBestMatches([]);
      console.log(err);
    }
  };

  return (
    <div
      className={`flex item-center my-4 border-2 rounded-md relative w-96 z-40 ${
        darkMode ? "bg-gray-600 border-gray-700" : "bg-white border-neutral-200"
      }`}
    >
      <input
        type="text"
        value={input}
        className={`w-full px-4 py-1 focus:outline-none rounded-md ${
          darkMode
            ? "bg-gray-600 border-gray-700"
            : "bg-white border-neutral-200"
        }`}
        placeholder="Search stock ..."
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            updateBestMatches();
          }
        }}
      />
      {input && (
        <button onClick={clear} className="m-1">
          <XIcon className="h-4 w-4 fill-gray-500" />
        </button>
      )}
      <button
        onClick={updateBestMatches}
        className="h-8 w-8 bg-indigo-700 rounded-md flex justify-center items-center m-1 p-2"
      >
        <SearchIcon className="h-4 w-4 fill-gray-100" />
      </button>

      {input && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} clear={clear} />
      ) : null}
    </div>
  );
}

export default Search;
