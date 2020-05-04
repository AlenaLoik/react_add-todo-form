import React from 'react';
import './App.css';
import { TodoList } from './TodoList';
import NewTodo from './NewTodo';

import users from './api/users';
import todos from './api/todos';

class App extends React.Component {
  state = {
    todos: [...todos],
    user: '0',
  };

  addTodo = (todo) => {
    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
    }));
  }

  changeUser = (event) => {
    this.setState({
      user: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>todos</h1>
        <label>
          <span>Choose a user: </span>
          <select onInput={this.changeUser} value={this.state.user}>
            <option value={0}>---</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
        </label>
        <NewTodo
          addTodo={this.addTodo}
          choosenUser={this.state.user}
        />
        <TodoList todosView={this.state.todos} usersView={users} />
      </div>
    );
  }
}

export default App;
