import React from 'react';
import './App.css';
import { TodoList } from './TodoList';
import { NewTodo } from './NewTodo';

import users from './api/users';
import todos from './api/todos';

class App extends React.Component {
  state = {
    todos: [...todos],
    enteredTodo: '',
    user: '0',
    id: 3,
  }

  setTodo = (enteredTodo) => {
    this.setState({ enteredTodo });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState(prevState => ({
      todos: [...prevState.todos,
        {
          title: prevState.enteredTodo,
          completed: false,
          userId: prevState.user,
          id: prevState.id,
        }],
      enteredTodo: '',
      id: prevState.id + 1,
    }));
  }

  changeUser = (event) => {
    this.setState({
      user: event.target.value,
    });
  }

  checkValidUser = () => this.state.user

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
          choosenUser={this.state.user}
          checkValidUser={this.checkValidUser}
          enteredTodo={this.state.enteredTodo}
          handleChange={this.setTodo}
          handleSubmit={this.handleSubmit}
        />
        <TodoList todosViev={this.state.todos} />
      </div>
    );
  }
}

export default App;
