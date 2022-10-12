import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
  const charts = useLoaderData()
  const newChart = charts.data
  console.log(newChart);
  return (
    <div className='w-96 m-auto'>
      <BarChart width={400} height={500} data={newChart}>
        <Bar type="monotone" dataKey="total" fill="#82ca9d" />
        <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Statistics;