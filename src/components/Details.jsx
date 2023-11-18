import React from "react";
import Card from "./Card";

function Details({ details }) {
  const convertMilltoBillions = (number) => {
    return (number / 1000).toFixed(2);
  };

  return (
    <Card>
      <ul className="w-full h-full flex flex-col justify-between divide-y-1">
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
            <li key={item} className="flex-1 flex justify-between items-center">
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
