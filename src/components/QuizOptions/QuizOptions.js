import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./QuizOptions.css";

const QuizOptions = ({ quiz ,index }) => {
  const { options, question } = quiz;
  // console.log(options)
  const quizAnswer = quiz.correctAnswer;
  const handleQuiz = (ans) => {
    if (quizAnswer === ans) {
      toast("Wow, Correct answer!");
    } else {
      toast(" Wrong answer !");
    }
  };
  const handleWithIcon = () => {
    const eyeIcon = quiz.correctAnswer;
    toast(eyeIcon);
  };
  return (
    <div className="mb-12 mt-6">
      <ToastContainer />
      <h1 className="shadow-2xl ml-3 mr-4 mt-12 lg:w-6/12 lg:m-auto flex place-content-between">
        <b>Quiz:{index+1}</b> :{question}
        <EyeIcon onClick={handleWithIcon} className="h-6 w-6 ml-6" />
      </h1>
      <div>
        <div className="mt-6">
          {options.map((option,idx) => (<h1 key={idx} className="bg-orange-200 p-4 lg:w-6/12 m-auto border-2 border-solid border-blue-600">
              <input
                onClick={() => handleQuiz(option)}
                type="radio"
                name="radio"
              />
              {option} 
            </h1>))}
        </div>
      </div>
    </div>
  );
};

export default QuizOptions;
