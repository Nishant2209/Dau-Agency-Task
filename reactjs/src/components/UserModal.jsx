import React, { useEffect } from "react";

const UserModal = ({ user, onClose }) => {
  // Closing modal on Escape key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-screen overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <div className="border-b pb-2">
              <h3 className="text-sm font-medium text-gray-500">
                Contact Information
              </h3>
              <div className="mt-2 space-y-2">
                <p>
                  <span className="font-medium">Email:</span> {user.email}
                </p>
                <p>
                  <span className="font-medium">Phone:</span> {user.phone}
                </p>
                <p>
                  <span className="font-medium">Website:</span>
                  <a
                    href={`http://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline ml-1"
                  >
                    {user.website}
                  </a>
                </p>
              </div>
            </div>

            <div className="border-b pb-2">
              <h3 className="text-sm font-medium text-gray-500">Address</h3>
              <div className="mt-2">
                <p>
                  {user.address.street}, {user.address.suite}
                </p>
                <p>
                  {user.address.city}, {user.address.zipcode}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Company</h3>
              <div className="mt-2">
                <p>
                  <span className="font-medium">Name:</span> {user.company.name}
                </p>
                <p>
                  <span className="font-medium">Business:</span>{" "}
                  {user.company.catchPhrase}
                </p>
                <p>
                  <span className="font-medium">BS:</span> {user.company.bs}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
