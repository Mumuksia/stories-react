import React, { Component } from 'react';

class FilteredStoriesComponent extends Component {
  render() {
    // Assuming 'filteredStories' is passed as a prop
    const { filteredStories } = this.props;

    return (
      <div>
        <h2>Filtered Stories</h2>
        <ul>
          {filteredStories.map(story => (
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

export default FilteredStoriesComponent;