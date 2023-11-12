import React from "react";
import Card from "./Card";
import Header from "./Header";
import { resStocks } from "../mockdata";

function Dashboard(props) {
  return (
    <div className="h-screen grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-7 xl:grid-cols-3 auto-rows-fr gap-4 p-10 font-quicksand">
      <div className="col-span-1 md:col-span-2 xl:col-span-3 ">
        <Header name={resStocks.name} />
      </div>
      <div className="md:col-span-2 row-span-4 ">
        <Card>Chart</Card>
      </div>
      <div className=" ">
        <Card>Overview</Card>
      </div>
      <div className="row-span-2 xl:row-span-3 ">
        <Card>Details</Card>
      </div>
    </div>
  );
}

export default Dashboard;
