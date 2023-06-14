


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Mytest = () => {
  const [code, setCode] = useState([]);
  const [quizForms, setQuizForms] = useState([]);
  const [selectedCode, setSelectedCode] = useState('');
  const [testNames, setTestNames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [codeResponse, testNamesResponse] = await Promise.all([
        axios.get('http://localhost:9002/api/display'),
        axios.get('http://localhost:9002/api/testg'),
      ]);

      const quizData = codeResponse.data;
      const codes = Array.from(new Set(quizData.map((quiz) => quiz.code))); // Filter out duplicate codes
      setCode(codes);
      setQuizForms(codes.map((code) => ({ code, questions: [] })));

      const testNamesData = testNamesResponse.data;
      const loadedTestNames = codes.map((code) => {
        const testNameData = testNamesData.find((item) => item.code === code);
        return testNameData ? testNameData.testname : '';
      });
      setTestNames(loadedTestNames);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchQuestions = async (code, index) => {
    try {
      const response = await axios.get('http://localhost:9002/api/display');
      const quizData = response.data;
      const matchingQuestions = quizData.filter((quiz) => quiz.code === code);
      const fetchedQuestions = matchingQuestions.map((quiz) => ({
        question: quiz.question,
        options: quiz.options,
        correctAnswer: quiz.correctAnswer,
      }));
      const updatedForms = [...quizForms];
      updatedForms[index].questions = fetchedQuestions;
      setQuizForms(updatedForms);
      setSelectedCode(code);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleTestNameChange = (index, event) => {
    const updatedTestNames = [...testNames];
    updatedTestNames[index] = event.target.value;
    setTestNames(updatedTestNames);
  };

  const saveTestNameToDatabase = async (code, testName) => {
    try {
      await axios.post('http://localhost:9002/api/testp', { code, testname: testName });
    } catch (error) {
      console.error('Error saving test name:', error);
    }
  };

  const handleSaveTestName = (code, testName) => {
    saveTestNameToDatabase(code, testName);
  };

  return (
    <div className="ml-64">
      <div className="container mx-auto py-8">
        {isLoading ? (
          <p>Loading test names...</p>
        ) : (
          quizForms.map((form, index) => (
            <div key={index} className="bg-white rounded shadow mb-6">
              <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300">
                <div>
              <input
                    type="text"
                    className="border rounded p-1 text-sm focus:outline-none"
                    placeholder="Name"
                    value={testNames[index]}
                    onChange={(event) => handleTestNameChange(index, event)}
                  />
                  <button
                    className="bg-teal-500 hover:bg-teal-700 text-white text-sm py-1 px-2 rounded ml-2 focus:outline-none"
                    onClick={() => handleSaveTestName(form.code, testNames[index])}
                  >
                    Ok
                  </button>
                  </div>
                {/* <p className="text-gray-700 font-semibold">{form.code}</p> */}
                <div>
               
                  <p className="text-gray-700 text-center font-semibold">{form.code}</p>
                  <button
                    className="bg-teal-500 hover:bg-teal-700 text-white text-sm py-1 px-2 rounded ml-2 focus:outline-none"
                    onClick={() => fetchQuestions(form.code, index)}
                  >
                    Fetch
                  </button>
                </div>
              </div>
              {form.code === selectedCode && form.questions.length > 0 && (
                <div className="px-4 py-3">
                  {form.questions.map((question, questionIndex) => (
                    <div key={questionIndex} className="mb-4 ml-6">
                      <h3 className="text-lg font-semibold mb-2">{question.question}</h3>
                      <ul className="list-disc ml-7 list-inside">
                        {question.options.map((option, optionIndex) => (
                          <li key={optionIndex} className="text-gray-700">
                            {option}
                          </li>
                        ))}
                      </ul>
                      {question.correctAnswer && question.correctAnswer.trim() !== '' ? (
                        <p className="text-green-600 ml-7 mt-2">Correct Answer: {question.correctAnswer}</p>
                      ) : (
                        <p className="text-red-600 mt-2">No correct answer available</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Mytest;




