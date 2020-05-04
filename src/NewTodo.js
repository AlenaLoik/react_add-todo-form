import React from 'react';
import './NewTodo.css';
import PropTypes from 'prop-types';

class NewTodo extends React.Component {
  state = {
    userId: 0,
    id: 3,
    title: '',
    completed: false,
  }

  handleChange = (title) => {
    this.setState({
      title,
      userId: +(this.props.choosenUser),
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;

    if (title.length > 0) {
      this.props.addTodo(this.state);
      this.setState(prevState => ({
        title: '',
        id: prevState.id + 1,
      }));
    } else {
      alert('Plese add todo');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Enter todo..."
            value={this.state.title}
            maxLength={40}
            onChange={(event) => {
              (this.props.choosenUser === '0')
                ? alert('Please choose a user!')
                : this.handleChange(event.target.value.replace(/[^\w]/g, ''));
            }}
          />
          <button className="button" type="submit">Add</button>
        </label>
      </form>
    );
  }
}

NewTodo.propTypes = {
  choosenUser: PropTypes.string.isRequired,
  addTodo: PropTypes.func.isRequired,
};

export default NewTodo;
