// App.jsx
import React, { useState, useEffect } from "react";
import $ from "jquery";
import UserList from "./components/UserList";
import UserModal from "./components/UserModal";
import Header from "./components/Header";
import Loader from "./components/Loader";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchUsers = () => {
    setLoading(true);
    setError(null);
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET",
      success: (data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      },
      error: (err) => {
        console.error("Error fetching users:", err);
        setError("Failed to load users. Please try again.");
        setLoading(false);
      },
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredUsers(users);
      return;
    }

    const term = searchTerm.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term) ||
        user.phone.toLowerCase().includes(term) ||
        user.website.toLowerCase().includes(term)
    );

    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRefresh = () => {
    setSearchTerm("");
    fetchUsers();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <Header
          searchTerm={searchTerm}
          onSearchChange={handleSearch}
          onRefresh={handleRefresh}
        />

        {loading ? (
          <Loader />
        ) : error ? (
          <div className="text-center text-red-500 mt-10">{error}</div>
        ) : (
          <UserList
            users={filteredUsers}
            onUserClick={handleUserClick}
            noResults={filteredUsers.length === 0}
          />
        )}

        {showModal && selectedUser && (
          <UserModal user={selectedUser} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
}

export default App;
