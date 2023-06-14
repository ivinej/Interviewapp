
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { shuffle } from 'lodash';
import { useNavigate } from 'react-router-dom';

const Userhome = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(900); // 5 minutes in seconds
  const [score, setScore] = useState(0);

  const code = new URLSearchParams(window.location.search).get('code');
  const userId = new URLSearchParams(window.location.search).get('userId');
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      axios
        .get(`http://localhost:9002/api/display?code=${code}`)
        .then((response) => {
          const filteredQuestions = response.data.filter((question) => question.code === code);
          const shuffledQuestions = shuffle(filteredQuestions);
          setQuestions(shuffledQuestions);
        })
        .catch((error) => {
          console.error('Error fetching questions:', error);
        });
    }
  }, [code]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (timer <= 0 && !submitted) {
      handleSubmit();
    }
  }, [timer, submitted]);

  const handleOptionChange = (questionId, optionValue) => {
    if (!submitted) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [questionId]: optionValue,
      }));
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevState) => prevState + 1);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    let totalMarks = questions.length; // Assuming each question carries one mark
    let obtainedMarks = 0;

    questions.forEach((question) => {
      if (selectedOptions[question._id] === question.correctAnswer) {
        obtainedMarks++;
      }
    });

    setScore(obtainedMarks);
    console.log('Selected Options:', selectedOptions);
    console.log('Score:', obtainedMarks, '/', totalMarks);
    // Perform any additional logic or submit the selected options

    navigate(`../usercmp?userId=${userId}&obtainedMarks=${obtainedMarks}&totalMarks=${totalMarks}`);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className=" items-center  min-h-screen py-20 bg-slate-100">
      <div className='lg:ml-20 lg:mr-20'>
        <div className="w-full  px-6 py-10 bg-white rounded-lg shadow-lg">
          <div className="mb-6">
            <a href="/">
              <h3 className="text-5xl text-center font-bold text-purple-600">Quiz</h3>
            </a>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <p className="lg:text-4xl text-3xl text-center text-gray-700 font-bold">
                Answer the following questions
              </p>
            </div>
            {currentQuestionIndex < questions.length && (
              <div className="p-4 bg-gray-200 rounded-md" key={questions[currentQuestionIndex]._id}>
                <p className="mb-4 lg:text-2xl text-1xl">
                   {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}
                </p>
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <div className="flex items-center mb-2" key={index}>
                    <input
                      type="radio"
                      name={`question-${questions[currentQuestionIndex]._id}`}
                      value={option}
                      className="form-radio h-5 w-5 text-blue-500"
                      onChange={() =>
                        handleOptionChange(questions[currentQuestionIndex]._id, option)
                      }
                      checked={
                        selectedOptions[questions[currentQuestionIndex]._id] === option
                      }
                      disabled={submitted}
                    />
                    <label className="ml-2 lg:text-2xl text-1xl text-gray-700">{option}</label>
                  </div>
                ))}
                {submitted && (
                  <>
                    {selectedOptions[questions[currentQuestionIndex]._id] ===
                    questions[currentQuestionIndex].correctAnswer ? (
                      <p className="text-green-500">Correct</p>
                    ) : (
                      <p className="text-red-500">Incorrect</p>
                    )}
                    <p className="text-gray-500">
                      Correct Answer: {questions[currentQuestionIndex].correctAnswer}
                    </p>
                    <p className="text-blue-500">
                      Score: {score}/{questions.length}
                    </p>
                  </>
                )}
              </div>
            )}

            <div className="flex justify-between">
              <div>
                {currentQuestionIndex > 0 && (
                  <button
                    type="button"
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    onClick={() =>
                      setCurrentQuestionIndex((prevState) => prevState - 1)
                    }
                  >
                    Previous
                  </button>
                )}
              </div>
              <div>
                {currentQuestionIndex < questions.length - 1 && (
                  <button
                    type="button"
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                )}
                {currentQuestionIndex === questions.length - 1 && (
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    disabled={submitted}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Time Remaining: {formatTime(timer)}
            </p>
            {submitted && (
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-700">
                  Quiz Submitted!
                </h3>
                <p className="text-lg font-medium text-gray-700">
                  Your score: {score} / {questions.length}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userhome;










