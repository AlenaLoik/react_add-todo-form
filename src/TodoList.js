import React from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';

export const TodoList = ({ todosViev }) => (
  <ul className="todo__list">
    {todosViev.map(todo => (
      <li className="todo" key={todo.title}>{todo.title}</li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todosViev: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
