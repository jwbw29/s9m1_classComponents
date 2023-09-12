import React from "react";
import Todo from "./Todo";

/** Notes
 * * Receives todos array and iterates over the list generating a new `<Todo />` for each element in the array.
 */

export default class TodoList extends React.Component {
  render() {
    const { todos, toggleCompletion } = this.props;
    return (
      <div id="todos">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleCompletion={toggleCompletion} />
        ))}
      </div>
    );
  }
}
