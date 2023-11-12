import React, { useState } from "react";
import { MoonIcon } from "@heroicons/react/solid";

function ThemeIcon(props) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className={`rounded-lg border-1 border-neutral-400 p-2 absolute top-10 right-10 xl:right-32 xl:top-14 shadow-lg ${
        darkMode ? "shadow-md shadow-gray-600" : null
      }`}
      onClick={toggleDarkMode}
    >
      <MoonIcon
        className={`h-8 w-8 cursor-pointer stroke fill-none stroke-neutral-500 ${
          darkMode
            ? "fill-yellow-400 stroke-yellow-400"
            : "fill-none stroke-neutral-400"
        }`}
      />
    </button>
  );
}

export default ThemeIcon;
