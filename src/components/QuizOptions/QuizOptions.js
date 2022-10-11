import React from 'react';
import './QuizOptions.css';
import { EyeIcon} from "@heroicons/react/24/solid";

const QuizOptions = ({ quiz }) => {
  const {options, question} = quiz;
  const quizAnswer = quiz.correctAnswer
  const handleQuiz = (event) => {
    const quizQuestion = event.target.innerText;
    console.log(quizQuestion);
    if (quizQuestion === quizAnswer) {
      alert('correct answer')
    } else {
      alert("wrong");
    }
  } 
  const handleWithIcon = () => {
    const eyeIcon = quiz.correctAnswer;
    alert(eyeIcon)
  }
  return (
    <div>
      <h1 className="bg-blue-300">{question}</h1>

      <h1>{quizAnswer}</h1>
      <div>
        <EyeIcon onClick={handleWithIcon} className="h-6 w-6 ml-96"/>
        <div onClick={(event) => handleQuiz(event)} className="quiz-list">
          {options.map((option) => (
            <h1>{option}</h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizOptions;