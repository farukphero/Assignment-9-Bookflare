import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOptions from '../QuizOptions/QuizOptions';

const Quiz = (id) => {
  const quiz = useLoaderData(id)
  const newQuiz = quiz.data.questions;
  return (
    <div>
      <h1 className='text-2xl blod mt-5'><b>Quiz of {quiz.data.name}</b></h1>
      {newQuiz.map((quiz,idx) => <QuizOptions key={quiz.id} index={idx} quiz={quiz}></QuizOptions>  )}
    </div>
  );
};

export default Quiz;