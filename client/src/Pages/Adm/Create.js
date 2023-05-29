import { nanoid } from 'nanoid';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [quizCode] = useState(nanoid(6));
  const [quest, setQuest] = useState({
    question: "",
    options: [],
    correctAnswer: ""
  });

  const navigate= useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "correctAnswer") {
      setQuest((prevState) => ({
        ...prevState,
        correctAnswer: value
      }));
    } else {
      setQuest((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };
  // const handleNew = (e) => {
  //   navigate(`../../testsuc?quizCode=${quizCode}`);
  // }
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the quest object with the generated code
    const updatedQuest = {
      ...quest,
      code: quizCode
    };

    // Make a POST request to the backend
    axios
      .post("http://localhost:9002/api/questions", updatedQuest)
      .then((response) => {
        // Handle success response
        console.log("Question created:", response.data);
        // Reset the form
        setQuest({
          question: "",
          options: [],
          correctAnswer: ""
        });
      })
      .catch((error) => {
        // Handle error response
        console.error("Error creating question:", error);
      });
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-200">
      <div>
    
          <h3 className="text-4xl font-bold text-purple-600">Quiz</h3>
       
      </div>
      <div className="w-full max-w-3xl mt-6">
        <div className="bg-white rounded shadow px-8 py-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="quizCode"
                className="block text-gray-700 font-bold mb-2"
              >
                Quiz Code:
              </label>
              <input
                type="text"
                id="quizCode"
                name="quizCode"
                value={quizCode || ""}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="question"
                className="block text-gray-700 font-bold mb-2"
              >
                Question:
              </label>
              <textarea
                id="question"
                name="question"
                value={quest.question}
                onChange={handleChange}
                rows="2"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">
                Options:
              </label>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index}>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="correctAnswer"
                        value={quest.options[index - 1] || ""}
                        checked={quest.correctAnswer === quest.options[index - 1]}
                        onChange={handleChange}
                        className="form-radio h-5 w-5 text-blue-500"
                      />
                      <span className="ml-2">Option {index}</span>
                    </label>
                    <input
                      type="text"
                      name="options"
                      value={quest.options[index - 1] || ""}
                      onChange={(e) => {
                        const newOptions = [...quest.options];
                        newOptions[index - 1] = e.target.value;
                        handleChange({ target: { name: "options", value: newOptions } });
                      }}
                      placeholder={`Option ${index}`}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Add
              </button>
              <Link to="../../testsuc">
                <button
                 
                  type=""
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
