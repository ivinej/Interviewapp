
import React, { useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const Score = () => {
  const [code, setCode] = useState('');
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10; // Number of users to display per page

  const pageCount = Math.ceil(users.length / usersPerPage);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:9002/api/score?code=${code}`);
      const fetchedUsers = response.data;
      setUsers(fetchedUsers);
      setPageNumber(0); // Reset page number when fetching new users
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayedUsers = users
    .filter((user) => user.code === code)
    .slice(pageNumber * usersPerPage, (pageNumber + 1) * usersPerPage);

  return (
    <div className="flex ml-64 justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-3xl px-4">
        <div className="mt-20">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter Quiz Code"
            className="w-full p-2 border border-blue-600 rounded-md"
            style={{ height: '40px' }}
          />
        </div>
        <div className="mt-2 mb-4">
          <button
            onClick={fetchUsers}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Fetch Users
          </button>
        </div>
        {/* <table className="w-full border  border-gray-300">
          <thead>
            <tr>
              <th className="p-2 border-b bg-white">Name</th>
              <th className="p-2 border-b bg-white">Email</th>
              <th className="p-2 border-b bg-white">Score</th>
            </tr>
          </thead>
          <tbody>
            {displayedUsers.map((user) => (
              <tr key={user._id}>
                <td className="p-2 border-b bg-white">{user.name}</td>
                <td className="p-2 border-b bg-white">{user.email}</td>
                <td className="p-2 border-b bg-white">{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <table className="w-full border border-gray-300">
  <thead>
    <tr>
      <th className="p-2 border-b border-r border-blue-900 bg-white">Name</th>
      <th className="p-2 border-b border-r border-blue-900 bg-white">Email</th>
      <th className="p-2 border-b border-blue-900 bg-white">Score</th>
    </tr>
  </thead>
  <tbody>
    {displayedUsers.map((user) => (
      <tr key={user._id}>
        <td className="p-2 border-b border-r border-blue-900 bg-white">{user.name}</td>
        <td className="p-2 border-b border-r border-blue-900 bg-white">{user.email}</td>
        <td className="p-2 border-b border-blue-900 bg-white">{user.score}</td>
      </tr>
    ))}
  </tbody>
</table>


        {/* Render pagination */}
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={'flex gap-5 justify-center mt-4'}
          activeClassName={'bg-sky-300 text-white'}
          previousClassName={'px-4 py-2 bg-gray-200 rounded-l-md'}
          nextClassName={'px-4 py-2 bg-gray-200 rounded-r-md'}
          disabledClassName={'opacity-50 cursor-not-allowed'}
          breakClassName={'px-4 py-2 bg-gray-200'}
        />
      </div>
    </div>
  );
};

export default Score;

