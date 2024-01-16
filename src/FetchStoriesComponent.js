import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FetchStoriesComponent extends Component {
  render() {
    const { stories } = this.props; // Use the stories prop passed from the parent

    return (
      <div>
        <h2>All Stories</h2>
        {stories.length === 0 ? (
          <p>No stories available.</p>
        ) : (
          <ul>
            {stories.map(storyString => {
              const story = JSON.parse(storyString)
              return (
                <li key={story.id}>
                  <p>{story.title}</p>
                  <p>Author: {story.author}</p>
                  <div
                    style={{ whiteSpace: 'pre-line' }}
                    dangerouslySetInnerHTML={{
                      __html: story.data,
                    }}
                  />
                  {/* Pass the entire story object as state */}
                  <Link
                    to={{
                      pathname: `/edit/${story.id}`,
                      state: { story },
                    }}
                  >
                    Edit
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default FetchStoriesComponent;