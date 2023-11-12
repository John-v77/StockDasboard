import React from "react";
import Card from "./Card";

function Overview({ symbol, price, change }) {
  return (
    <Card>
      <span className="absolute left-2 top-2 text-neutral-400 text-lg xl:text-xl 2xl:text-xl">
        {symbol}
      </span>
      <div className="w-full h-full flex items-center justify-around pl-16">
        <span className="text-2xl xl:text-3xl flex items-center">
          ${price}
          <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">
            USD
          </span>
        </span>

        <span
          className={`text-lg xl:text-xl 2xl:text-2xl ${
            change > 0 ? "text-lime-500" : "text-red-500"
          }`}
        >
          ${change} <span>({change}%)</span>
        </span>
      </div>
    </Card>
  );
}

export default Overview;
