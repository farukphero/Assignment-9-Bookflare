import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
  const charts = useLoaderData()
  const newChart = charts.data
  return (
    <div className='w-96 m-auto mt-20'>
      <BarChart width={600} height={500} data={newChart}>
        <Bar type="monotone" dataKey="total" fill="#8884d8" strokeWidth={2} />
        <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Statistics;