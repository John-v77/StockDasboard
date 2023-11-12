import React, { useState } from "react";
import Card from "./Card";
import { mockHistoricalData } from "../mockdata";
import { chartConfig } from "../constants/config";
import { convertUnixTimestampToDate } from "../utils/tools";
import ChartFilter from "./ChartFilter";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Chart(props) {
  const [data, setData] = useState(mockHistoricalData);
  const [filter, setFilter] = useState("1W");

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
        <AreaChart data={formatData(data)}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="rgb(199 210 254)"
                stopOpacity={0.8}
              />
              <stop offset="95%" stopColor="rgb(199 210 254)" stopOpacity={0} />
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
          <Tooltip />
          <XAxis dataKey="date" />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default Chart;
