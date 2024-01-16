import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import FetchStoriesComponent from './FetchStoriesComponent';
import EditStoryForm from './EditStoryForm';

function App() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching stories...');
    // Call your API endpoint to fetch stories
    fetch('http://localhost:8080/getstories')
      .then(response => response.json())
      .then(data => {
        setStories(data);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching stories:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  return (
    <Router>
      <div>
        <h1>Story App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <Routes>
            <Route
              path="/"
              element={<FetchStoriesComponent stories={stories} />}
            />
            {/* Route to edit form */}
            <Route
              path="/edit/:id"
              element={<EditStoryForm />}
            />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;