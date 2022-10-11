import React from 'react';
import './QuizOptions.css';
import { EyeIcon } from "@heroicons/react/24/solid";


const QuizOptions = ({ quiz }) => {
  const {options, question} = quiz;
  const answer = quiz.correctAnswer
  const handleQuiz = (event) => {
    const question = event.target.innerText;
    console.log(question)
    if (question === answer) {
       alert('correct')
    }
    else {
      alert('wrong')
    }
  } 
  const handleWithIcon = () => {
    const eyeIcon = quiz.correctAnswer;
    alert(eyeIcon)
  }
  return (
    <div>
      <h1 className="bg-blue-300">{question}</h1>
      <h1>{answer}</h1>
      <div className="quiz-list">
        <EyeIcon onClick={handleWithIcon} className="h-6 w-6 text-blue-500" />
        {options.map((option) => (
          <h1 onClick={(event) => handleQuiz(event)}>{option}</h1>
        ))}
      </div>
    </div>
  );
};

export default QuizOptions;