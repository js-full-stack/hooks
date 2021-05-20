import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum();
export default class Todos extends Component {
  state = {
    todos: [],
    filter: '',
  };

  addTodo = () => {
    const todo = {
      id: uuidv4(),
      text: lorem.generateWords(3),
    };

    this.setState(state => ({
      todos: [...state.todos, todo],
    }));
  };

  removeTodo = todoId => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== todoId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const filteredTodos = this.state.todos.filter(todo =>
      todo.text.includes(this.state.filter),
    );

    return (
      <>
        <input
          type="text"
          onChange={this.changeFilter}
          value={this.state.filter}
        />
        <br />
        <button type="button" onClick={this.addTodo}>
          Add todo
        </button>
        <ul>
          {filteredTodos.map(todo => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button type="button" onClick={() => this.removeTodo(todo.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
