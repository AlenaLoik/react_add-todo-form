import React from 'react';
import './NewTodo.css';
import PropTypes from 'prop-types';

export const NewTodo = (
  { choosenUser, enteredTodo, handleChange, handleSubmit },
) => (
  <form onSubmit={handleSubmit}>
    <label>
      <input
        type="text"
        placeholder="Enter todo..."
        value={enteredTodo}
        maxLength={40}
        onChange={(event) => {
          (choosenUser === '0')
            ? alert('Please choose a user!')
            : handleChange(event.target.value.replace(/[^\w]/g, ''));
        }}
        required
      />
      <button className="button" type="submit">Add</button>
    </label>
  </form>
);

NewTodo.propTypes = {
  choosenUser: PropTypes.string.isRequired,
  enteredTodo: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
