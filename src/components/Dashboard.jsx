import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Details from "./Details";
import Overview from "./Overview";
import Chart from "./Chart";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { fetchQuote, fetchStockDetails } from "../api/Stocks-api";

function Dashboard(props) {
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);
  const [stockDetails, setStockDetails] = useState({});
  const [qoute, setQuote] = useState({});

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (err) {
        setStockDetails({});
        console.log(err);
      }
    };

    const updateStockOverview = async () => {
      try {
        const res = await fetchQuote(stockSymbol);
        setQuote(res);
      } catch (err) {
        setQuote({});
        console.log(err);
      }
    };

    updateStockOverview();
    updateStockDetails();
  }, [stockSymbol]);

  return (
    <div
      className={`h-screen grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-7 xl:grid-cols-3 auto-rows-fr gap-4 p-10 font-quicksand ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      }`}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 flex items-center">
        <Header name={stockDetails?.name} />
      </div>
      <div className="md:col-span-2 row-span-4 ">
        <Chart>Chart</Chart>
      </div>
      <div className="row-span-1">
        <Overview
          symbol={stockSymbol}
          price={qoute?.pc}
          change={qoute?.d}
          changePercent={qoute?.dp}
          currency={stockDetails?.currency}
        />
      </div>
      <div className="row-span-3 xl:row-span-3 ">
        <Details details={stockDetails} />
      </div>
    </div>
  );
}

export default Dashboard;
