import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { mockHistoricalData } from "../mockdata";
import { chartConfig } from "../constants/config";
import {
  convertDateToUnixTimestamp,
  convertUnixTimestampToDate,
  createDate,
} from "../utils/tools";
import ChartFilter from "./ChartFilter";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import StockContext from "../context/StockContext";

import { fetchHistoricalData } from "../api/Stocks-api";
import ThemeContext from "../context/ThemeContext";

function Chart(props) {
  const [data, setData] = useState(mockHistoricalData);
  const [filter, setFilter] = useState("1W");

  const { stockSymbol } = useContext(StockContext);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    // get range of chart
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];

      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years);
      const startTimeUnix = convertDateToUnixTimestamp(startDate);
      const endTimeUnix = convertDateToUnixTimestamp(endDate);

      return { startTimeUnix, endTimeUnix };
    };

    // update chart based on new dates
    const updateChartData = async () => {
      try {
        const { startTimeUnix, endTimeUnix } = getDateRange();
        const resolution = chartConfig[filter].resolution;

        const result = await fetchHistoricalData(
          stockSymbol,
          resolution,
          startTimeUnix,
          endTimeUnix
        );

        setData(formatData(result));
      } catch (err) {
        setData([]);
        console.log(err);
      }
    };

    updateChartData();
  }, [stockSymbol, filter]);

  const formatData = (data) => {
    return data.c.map((el, index) => {
      return {
        value: el.toFixed(2),
        data: convertUnixTimestampToDate(data.t[index]),
      };
    });
  };

  return (
    <Card>
      <ul className="flex absolute z-40 top-2 right-2">
        {Object.keys(chartConfig).map((el) => {
          return (
            <li key={el}>
              <ChartFilter
                text={el}
                active={filter === el}
                onClick={() => {
                  setFilter(el);
                }}
              />
            </li>
          );
        })}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={data} className="mt-5">
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={`${darkMode ? "#312e81" : "#c7d2fe"}`}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={`${darkMode ? "#312e81" : "#c7d2fe"}`}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fillOpacity={1}
            fill="url(#chartColor)"
            strokeWidth={0.5}
          />
          <Tooltip
            className="text-xs"
            contentStyle={darkMode ? { backgroundColor: "#111827" } : null}
            itemStyle={darkMode ? { color: "#818cf8" } : null}
          />
          <XAxis dataKey="data" className="text-xs" />
          <YAxis domain={["dataMin", "dataMax"]} className="text-xs" />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default Chart;
