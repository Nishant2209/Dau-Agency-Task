import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users, onUserClick, noResults }) => {
  if (noResults) {
    return (
      <div className="text-center text-gray-500 py-8">
        <p>No users found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onClick={onUserClick} />
      ))}
    </div>
  );
};

export default UserList;
