import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
  const topics = useLoaderData()
   const newCart = topics.data;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {newCart.map((topic) => (
        <Topic key={topic.id} topic={topic}></Topic>
      ))}
    </div>
  );
};

export default Topics;