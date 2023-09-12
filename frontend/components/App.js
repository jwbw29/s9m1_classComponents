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

export default class App extends React.Component {
  onSubmit = () => {
    // Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
  };

  onEnter = () => {
    // Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
  };

  render() {
    return (
      <div>
        <h1>Todos:</h1>
        <TodoList />
        <Form />
      </div>
    );
  }
}
