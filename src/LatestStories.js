import React, { Component } from 'react';

class LatestStoriesComponent extends Component {
  render() {
    // Assuming 'latestStories' is passed as a prop
    const { latestStories } = this.props;

    return (
      <div>
        <h2>Latest Stories</h2>
        <ul>
          {latestStories.map(story => (
            <li key={story.id}>
              <p>{story.body}</p>
              <p>Author: {story.author}</p>
              <p>Tags: {story.tags.join(', ')}</p>
              <p>Date: {story.date}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LatestStoriesComponent;