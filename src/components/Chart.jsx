import React, { useState } from "react";
import Card from "./Card";
import { mockHistoricalData } from "../mockdata";
import { convertUnixTimestampToDate } from "../utils/tools";

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
