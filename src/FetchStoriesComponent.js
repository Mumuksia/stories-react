import React, { Component } from 'react';

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
                    dangerouslySetInnerHTML={{
                      __html: story.data.replace(/\r\n/g, '<br/>'),
                    }}
                  />
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