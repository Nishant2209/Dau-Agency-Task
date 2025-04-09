# User List Application

A application that fetches user data from a public API using jQuery AJAX and displays it in a responsive layout styled with Tailwind CSS. The project is created using two approach
1. native-html-css: It contains code made using native html and js without using any of the frameword.
2. reactjs: It contains code made using ReactJs as a framework
Note: Both the projects have been initialized using `vite`

## Features

- Fetches and displays user data from JSONPlaceholder API
- Responsive card/grid layout using Tailwind CSS
- Real-time search filtering by name, email, phone, or website
- "Refresh Users" button to reload data without refreshing the page
- Modal popup with additional user details (address and company information)
- Loading state with spinner animation
- Error handling for failed API requests

## Tech Stack

### native-html-css
- **HTML**: Used for frontend
- **jQuery**: Used for AJAX requests
- **Tailwind CSS**: For styling and responsive design
- **JSONPlaceholder API**: Source of user data

### reactjs

- **React.js**: Frontend framework
- **jQuery**: Used for AJAX requests
- **Tailwind CSS**: For styling and responsive design
- **JSONPlaceholder API**: Source of user data

## Setup Instructions

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nishant2209/Dau-Agency-Task.git
```
### For native-html-js

1. Navigate to `native-html-js` directory:
```bash
cd native-html-js
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### For reactjs

1. Navigate to `reactjs` directory:
```bash
cd reactjs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

```
Note: The ports might change if you are running both the projects at the same time so check the ports accordingly
```

### Building for Production in any of the case

```bash
npm run build
```

## Implementation Approach

### `native-html-js` folder project

1. **User Interface Design**:
   - Used Tailwind CSS for a clean, modern, responsive layout
   - Implemented a card-based design for user information
   - Added a search bar for filtering and a refresh button for reloading data
   - Created a modal component for displaying additional user details

2. **Data Fetching**:
   - Utilized jQuery's AJAX functionality to fetch data from the JSONPlaceholder API
   - Implemented error handling for API request failures
   - Added loading spinner to indicate when data is being fetched

3. **User Interaction**:
   - Implemented real-time search filtering across all user fields
   - Created interactive cards that open a detail modal when clicked
   - Added a refresh button that reloads data without page refresh

4. **Responsiveness**:
   - Designed the layout to work on mobile, tablet, and desktop screen sizes
   - Adjusted grid columns based on screen width
   - Made modal responsive for different screen sizes

## `reactjs` folder project

1. **Component Architecture**:
   - Divided UI into reusable components
   - Used functional components with React hooks
   - Implemented proper prop passing between components

2. **Data Fetching**:
   - Used jQuery AJAX to fetch data from the JSONPlaceholder API as required
   - Implemented loading state during data fetch
   - Added error handling for failed requests

3. **State Management**:
   - Used React's useState and useEffect hooks
   - Implemented search filtering with derived state
   - Managed modal state for user detail view

4. **Styling**:
   - Used Tailwind CSS for consistent, responsive design
   - Implemented mobile-first approach
   - Added subtle animations and hover effects

5. **User Experience**:
   - Added loading indicators
   - Implemented responsive layout for all screen sizes
   - Created intuitive modal for detailed information

## Future Improvements

- Implement pagination for larger datasets
- Add sorting functionality
- Implement dark mode toggle
- Implement data caching for improved performance