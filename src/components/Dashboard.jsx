import React from "react";
import Card from "./Card";
import { mockCompanyDetails, resStocks } from "../mockdata";
import Header from "./Header";
import Details from "./Details";
import Overview from "./Overview";

function Dashboard(props) {
  return (
    <div className="h-screen grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-7 xl:grid-cols-3 auto-rows-fr gap-4 p-10 font-quicksand">
      <div className="col-span-1 md:col-span-2 xl:col-span-3 flex items-center">
        <Header name={resStocks.name} />
      </div>
      <div className="md:col-span-2 row-span-4 ">
        <Card>Chart</Card>
      </div>
      <div className="row-span-1">
        <Overview
          symbol={mockCompanyDetails.ticker}
          price={300}
          change={30}
          changePercent={10.0}
          currency={"USD"}
        />
      </div>
      <div className="row-span-2 xl:row-span-3 ">
        <Details details={mockCompanyDetails} />
      </div>
    </div>
  );
}

export default Dashboard;
