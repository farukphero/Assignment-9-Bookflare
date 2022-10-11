import React from 'react';
import { EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './QuizOptions.css';

const QuizOptions = ({ quiz }) => {
  const {options, question} = quiz;
  const quizAnswer = quiz.correctAnswer
  // console.log(quizAnswer)
  const handleQuiz = (ans) => {
     
    if (quizAnswer ===  ans) {
      toast("Wow, Correct answer!")  
    }
    else {
      toast(" Wrong answer !");
    }
  } 
  const handleWithIcon = () => {
    const eyeIcon = quiz.correctAnswer;
    alert(eyeIcon)
  }
  return (
    <div className="mb-12">
      <ToastContainer />
      <h1 className="shadow-2xl mt-12 w-6/12 m-auto flex">
        {question}
        <EyeIcon onClick={handleWithIcon} className="h-6 w-6" />
      </h1>
      <h1>{quizAnswer}</h1>
      <div>
        <div className="">
          {options.map((option) => (
            <h1 className="bg-orange-200 p-4 w-6/12 m-auto border-2 border-solid border-blue-600">
              <input
                onClick={() => handleQuiz(option)}
                type="radio"
                name="radio"
              />

              {option}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizOptions;