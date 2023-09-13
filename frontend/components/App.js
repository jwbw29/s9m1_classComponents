import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";

/** Notes
 * * Hold all todos in state HERE *****
 *
 * * All app data will be stored here
 *
 * * All Handler functions will live HERE
 */

let id = 0;
let getId = () => ++id;

const initialTodos = [
  { id: getId(), name: "Walk the dog", completed: false },
  { id: getId(), name: "Learn React", completed: true },
  { id: getId(), name: "Have fun", completed: false },
];

export default class App extends React.Component {
  state = {
    todos: initialTodos,
  };

  addTodo = (name) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({ id: getId(), completed: false, name }),
    });
  };

  toggleCompletion = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((td) => {
        if (id === td.id) return { ...td, completed: !td.completed };
        return td;
      }),
    });
  };

  render() {
    return (
      <div>
        <h1>Todos:</h1>
        <TodoList
          todos={this.state.todos}
          toggleCompletion={this.toggleCompletion}
        />
        <Form addTodo={this.addTodo} />
      </div>
    );
  }
}
