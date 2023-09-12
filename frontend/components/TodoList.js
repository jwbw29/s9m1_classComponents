import React from "react";
import Todo from "./Todo";

/** Notes
 * * Receives todos array and iterates over the list generating a new `<Todo />` for each element in the array.
 */

export default class TodoList extends React.Component {
  render() {
    return (
      <div id="todos">
        {/* Once a todo is submitted, the Todo List should re-render and show the added todo */}
        <Todo />
        {/* Receives todo **AND ITERATES OVER THE LIST** generating a new '<Todo />' **FOR EACH** element in the array */}
      </div>
    );
  }
}
