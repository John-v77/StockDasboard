import React, { useContext } from "react";
import Card from "./Card";
import ThemeContext from "../context/ThemeContext";

function Details({ details }) {
  const { darkMode } = useContext(ThemeContext);

  const convertMilltoBillions = (number) => {
    return (number / 1000).toFixed(2);
  };

  return (
    <Card>
      <ul
        className={`w-full h-full flex flex-col justify-between divide-y-1 ${
          darkMode ? "divide-gray-600" : null
        }`}
      >
        {Object.keys(details).map((item) => {
          if (
            [
              "estimateCurrency",
              "logo",
              "exchange",
              "finnhubIndustry",
              "phone",
              "ticker",
            ].includes(item)
          ) {
            return;
          }
          return (
            <li
              key={item}
              className="flex-1 flex justify-between items-center py-1"
            >
              <span>{item}</span>
              <span>
                {item === "marketCapitalization"
                  ? `${convertMilltoBillions(details[item])}B`
                  : details[item]}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default Details;
