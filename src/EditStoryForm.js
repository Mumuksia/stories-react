import React, { Component } from 'react';

class EditStoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editedStory: {
        id: props.story.id,
        body: props.story.body,
        author: props.story.author,
        tags: props.story.tags.join(', '), // Assuming tags is an array
        date: props.story.date,
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      editedStory: {
        ...prevState.editedStory,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Call your API endpoint to update the story with this.state.editedStory
    // Example: fetch('your-api-endpoint-for-updating-story', { method: 'PUT', body: JSON.stringify(this.state.editedStory) })
    // Handle success or error accordingly
  };

  render() {
    const { editedStory } = this.state;

    return (
      <div>
        <h2>Edit Story</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Body:
            <textarea
              name="body"
              value={editedStory.body}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={editedStory.author}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Tags (comma-separated):
            <input
              type="text"
              name="tags"
              value={editedStory.tags}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Date:
            <input
              type="text"
              name="date"
              value={editedStory.date}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  }
}

export default EditStoryForm;