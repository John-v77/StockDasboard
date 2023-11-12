import React from "react";
import Card from "./Card";

function Details({ details }) {
  const detailsList = {
    name: "Name",
    country: "Country",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Cap.",
    finnhubIndustry: "Industry",
  };
  const convertMilltoBillions = (number) => {
    return (number / 1000).toFixed(2);
  };

  return (
    <Card>
      <ul className="w-full h-full flex flex-col justify-between divide-y-1">
        {Object.keys(detailsList).map((item) => {
          return (
            <li key={item} className="flex-1 flex justify-between items-center">
              <span>{detailsList[item]}</span>
              <span>
                {item === "marketCap"
                  ? `${convertMilltoBillions(detailsList[item])}B`
                  : detailsList[item]}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default Details;
