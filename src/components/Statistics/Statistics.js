import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const Statistics = () => {
  const charts = useLoaderData()
  // const newChart = charts.data
  // console.log(newChart);
  return (
    <div>
      <h1>hello</h1>
      <LineChart width={300} height={100} data={charts.data}>
        <Line type="monotone" dataKey="name" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </div>
  );
};

export default Statistics;