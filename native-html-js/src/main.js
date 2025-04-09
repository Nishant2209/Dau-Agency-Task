$(document).ready(function () {
  // Function to fetch and display users
  function fetchUsers() {
    $("#loader").removeClass("hidden");
    $("#userList").empty();

    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET",
      success: function (users) {
        displayUsers(users);
        $("#loader").addClass("hidden");
      },
      error: function (error) {
        $("#userList").html(`
                    <div class="col-span-full text-center text-red-500">
                        <p>Error loading users. Please try again.</p>
                    </div>
                `);
        $("#loader").addClass("hidden");
        console.error("Error fetching users:", error);
      },
    });
  }

  // Function to display users
  function displayUsers(users) {
    if (users.length === 0) {
      $("#userList").html(`
                <div class="col-span-full text-center text-gray-500">
                    <p>No users found.</p>
                </div>
            `);
      return;
    }

    users.forEach(function (user) {
      const userCard = `
                <div class="user-card bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden cursor-pointer" data-user='${JSON.stringify(
                  user
                )}'>
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <div class="bg-blue-100 rounded-full p-3 mr-4">
                                <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-800">${
                              user.name
                            }</h3>
                        </div>
                        <div class="space-y-2 text-gray-600">
                            <p class="flex items-center">
                                <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                ${user.email}
                            </p>
                            <p class="flex items-center">
                                <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                ${user.phone}
                            </p>
                            <p class="flex items-center">
                                <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                </svg>
                                <a href="http://${
                                  user.website
                                }" target="_blank" class="text-blue-500 hover:underline">${
        user.website
      }</a>
                            </p>
                        </div>
                        <button class="mt-4 text-blue-500 hover:text-blue-700 text-sm font-medium">
                            View Details
                        </button>
                    </div>
                </div>
            `;

      $("#userList").append(userCard);
    });

    // Initialize search filter after users are loaded
    initializeSearch();
  }

  // Function to open modal with user details
  function openUserModal(user) {
    $("#modalTitle").text(user.name);

    const modalContent = `
            <div class="space-y-4">
                <div class="border-b pb-2">
                    <h3 class="text-sm font-medium text-gray-500">Contact Information</h3>
                    <div class="mt-2 space-y-2">
                        <p><span class="font-medium">Email:</span> ${user.email}</p>
                        <p><span class="font-medium">Phone:</span> ${user.phone}</p>
                        <p><span class="font-medium">Website:</span> <a href="http://${user.website}" target="_blank" class="text-blue-500 hover:underline">${user.website}</a></p>
                    </div>
                </div>
                
                <div class="border-b pb-2">
                    <h3 class="text-sm font-medium text-gray-500">Address</h3>
                    <div class="mt-2">
                        <p>${user.address.street}, ${user.address.suite}</p>
                        <p>${user.address.city}, ${user.address.zipcode}</p>
                    </div>
                </div>
                
                <div>
                    <h3 class="text-sm font-medium text-gray-500">Company</h3>
                    <div class="mt-2">
                        <p><span class="font-medium">Name:</span> ${user.company.name}</p>
                        <p><span class="font-medium">Business:</span> ${user.company.catchPhrase}</p>
                        <p><span class="font-semibold">BS:</span> ${user.company.bs}</p>
                    </div>
                </div>
            </div>
        `;

    $("#modalContent").html(modalContent);
    $("#userModal").removeClass("hidden");
    $("body").addClass("overflow-hidden");
  }

  // Function to initialize search functionality
  function initializeSearch() {
    $("#searchInput").on("keyup", function () {
      const searchTerm = $(this).val().toLowerCase();

      $(".user-card").each(function () {
        const userData = JSON.parse($(this).attr("data-user"));
        const name = userData.name.toLowerCase();
        const email = userData.email.toLowerCase();
        const phone = userData.phone.toLowerCase();
        const website = userData.website.toLowerCase();

        if (
          name.includes(searchTerm) ||
          email.includes(searchTerm) ||
          phone.includes(searchTerm) ||
          website.includes(searchTerm)
        ) {
          $(this).removeClass("hidden");
        } else {
          $(this).addClass("hidden");
        }
      });

      // Show "No results" message if all cards are hidden
      if ($(".user-card:not(.hidden)").length === 0) {
        if ($("#no-results-message").length === 0) {
          $("#userList").append(`
                        <div id="no-results-message" class="col-span-full text-center text-gray-500 py-8">
                            <p>No users found matching your search.</p>
                        </div>
                    `);
        }
      } else {
        $("#no-results-message").remove();
      }
    });
  }

  // Event Handlers

  // Refresh button click
  $("#refreshButton").on("click", function () {
    fetchUsers();
    $("#searchInput").val(""); // Clear search input
  });

  // User card click (for modal)
  $(document).on("click", ".user-card", function () {
    const userData = JSON.parse($(this).attr("data-user"));
    openUserModal(userData);
  });

  // Close modal
  $("#closeModal, #userModal").on("click", function (e) {
    if (e.target === this) {
      $("#userModal").addClass("hidden");
      $("body").removeClass("overflow-hidden");
    }
  });

  // Initial fetch
  fetchUsers();
});
