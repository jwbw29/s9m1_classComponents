import React from "react";

/** Notes
 * * Component that takes in the `todo` data and displays the task to the screen
 */

export default class Todo extends React.Component {
  render() {
    return (
      <div className="todo">
        <ul>
          <li>New To-do</li>
        </ul>
      </div>
    );
  }
}
