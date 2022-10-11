 
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOptions from '../../QuizOptions/QuizOptions';

const Quiz = (id) => {
  const quiz = useLoaderData(id)
  const newQuiz = quiz.data.questions;
  console.log(quiz.data.questions)
  return (
    <div>
      {newQuiz.map((quiz) => <QuizOptions key={quiz.id} quiz={quiz}></QuizOptions>  )}
    </div>
  );
};

export default Quiz;