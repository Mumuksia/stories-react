import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

class EditStoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editedStory: {
        id: props.id,
        title: '',
        data: '',
        author: '',
        tags: '',
        description: '',
      },
    };
  }

  async componentDidMount() {
    // Fetch the story based on the id
    const storyData = await this.fetchStory(this.props.id);

    this.setState({
      editedStory: {
        id: storyData.id,
        title: storyData.title,
        data: storyData.data,
        author: storyData.author,
        tags: storyData.tags, // Assuming tags is an array
        description: storyData.description,
      },
    });
  }

  fetchStory = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/getbyid/${id}`);
      console.log('current story', response)
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching story:', error);
      return {};
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      editedStory: {
        ...prevState.editedStory,
        [name]: value,
      },
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'your-api-endpoint-for-updating-story' with your actual endpoint
      const response = await fetch('http://localhost:8080/updatestory', {
        method: 'POST', // Change the method based on your API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.editedStory),
      });

      if (response.ok) {
        console.log('Story updated successfully!');
      } else {
        console.error('Failed to update story:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating story:', error);
    }
  };

  render() {
    const { editedStory } = this.state;

    return (
      <div>
        <h2>Edit Story</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            title:
            <input
              type="text" // Change to 'date' if you want to use a date picker
              name="title"
              value={editedStory.title}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Body:
            <textarea
              name="data"
              value={editedStory.data}
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
            description:
            <input
              type="text"
              name="description"
              value={editedStory.description}
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

// Function component that uses useParams and passes the id to the class component
const EditStoryFormWrapper = () => {
  const { id } = useParams();

  // Render the class component and pass the id as a prop
  return <EditStoryForm id={id} />;
};

export default EditStoryFormWrapper;