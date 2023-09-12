import React from "react";

/** Notes
 *
 * * Will hold your input field and your `Add Todo` and `Clear Completed` buttons
 *
 * * Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
 */

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <input />

            {/* I need this button to send the input to the task list */}
            <button>Submit</button>
          </div>

          {/* I need this button to toggle completed tasks */}
          <button>Show Completed</button>
        </form>
      </div>
    );
  }
}
