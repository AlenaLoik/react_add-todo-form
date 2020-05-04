import React from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';

export const TodoList = ({ todosView, usersView }) => (
  <div className="todo__list">
    <table className="todo__table">
      <tr className="table__header">

        <th>todo</th>
        <th>user</th>
        <th>completed</th>
      </tr>
      {todosView.map(todo => (
        <tr className="table__body" key={todo.title}>
          <td>{todo.title}</td>
          <td>{(usersView.find(user => (user.id === todo.userId))).name}</td>
          <td>{(todo.completed) ? 'done' : 'no'}</td>
        </tr>
      ))}
    </table>
  </div>
);

TodoList.propTypes = {
  todosView: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  usersView: PropTypes.arrayOf(
    PropTypes.any,
  ).isRequired,
};
