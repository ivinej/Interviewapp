

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Userlog = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleJoin = async event => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:9002/api/display?code=${code}`);
      const data = response.data;
      
      // Check if any element in the response data has a matching code
      const matchingElement = data.find(item => item.code === code);

      if (matchingElement) {
        console.log('Success');
        navigate(`../admreg?code=${code}`);
      } else {
        console.log('Code does not match');
      }
    } catch (error) {
      console.error('Error fetching code:', error);
    }
  };

  const handleChange = event => {
    setCode(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-purple-700 mb-6">
          Exam Zone
        </h1>
        <form className="space-y-4" onSubmit={handleJoin}>
          <div>
            <label htmlFor="code" className="block text-gray-700 font-bold">
              Enter code to attend the test
            </label>
            <input
              id="code"
              type="text"
              name="code"
              value={code}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 py-2 px-3 mt-2"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 text-white font-semibold bg-purple-700 rounded hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
          >
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default Userlog;


