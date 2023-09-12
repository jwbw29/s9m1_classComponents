import React from "react";

/** Notes
 * * Component that takes in the `todo` data and displays the task to the screen
 */

export default class Todo extends React.Component {
  render() {
    const { id, name, completed } = this.props.todo;
    const { toggleCompletion } = this.props;
    return (
      <div className="todo" onClick={() => toggleCompletion(id)}>
        <ul>
          <li>
            {name} {completed && "✅"}
          </li>
        </ul>
      </div>
    );
  }
}
