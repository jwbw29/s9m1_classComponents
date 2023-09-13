import React from "react";
import TodoList from "./TodoList";

/** Notes
 *
 * * Will hold your input field and your `Add Todo` and `Clear Completed` buttons
 *
 * * Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
 */

export default class Form extends React.Component {
  state = {
    name: "",
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.addTodo(this.state.name);
    this.setState({ name: "" });
  };

  onChange = (evt) => {
    const { value } = evt.target;
    this.setState({
      name: value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              type="text"
              placeholder="Add To-Do"
              value={this.state.name}
              onChange={this.onChange}
            />

            {/* I need this button to send the input to the task list */}
            <button>Submit</button>
          </div>

          {/* I need this button to toggle completed tasks */}
          {/* <button>Show Completed</button> */}
        </form>{" "}
      </div>
    );
  }
}
