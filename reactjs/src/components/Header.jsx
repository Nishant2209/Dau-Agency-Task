import React from "react";
const Header = ({ searchTerm, onSearchChange, onRefresh }) => {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        User Directory
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search by name, email, phone..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={onSearchChange}
          />
        </div>

        <button
          onClick={onRefresh}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 flex items-center"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            ></path>
          </svg>
          Refresh Users
        </button>
      </div>
    </header>
  );
};

export default Header;
