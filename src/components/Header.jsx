import React from "react";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";

function Header({ name }) {
  return (
    <div className="xl:px-16">
      <div>
        <h1 className="text-3xl ml-1">{name}</h1>
        <Search />
      </div>
      <ThemeIcon />
    </div>
  );
}

export default Header;
