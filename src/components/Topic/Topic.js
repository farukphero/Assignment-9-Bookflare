import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
  console.log(topic);
  const { id, name, logo, total } = topic;
  return (
    <div className="border-2 border-solid border-orange-400 h-full lg:h-72 rounded m-24">
      <img className="bg-orange-400 w-full h-3/4 rounded" src={logo} alt="" />
      <div className="lg:flex lg:justify-between mt-6">
        <h1>{name}</h1>
        <p> Total quiz: {total}</p>
        <div>
          <Link to={`/quiz/${id}`}>
            <button className="bg-orange-400 p-3 rounded text-white">
              Start Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topic;