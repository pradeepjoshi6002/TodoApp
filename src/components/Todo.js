import React, { Component } from "react";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      currentTasks: "",
      id: 1,
    };
  }
  handleChange = (e) => {
    // this.state.currentTasks = e.target.value;
    this.setState({
      currentTasks: e.target.value,
    });
  };
  handleClick = () => {
    this.setState({
      id: this.state.id + 1,
    });
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: this.state.currentTasks, id: this.state.id },
      ],
      currentTasks: "",
    });
  };
  handleDelete = (idx) => {
    let narr = this.state.tasks.filter((ele) => ele.id !== idx);
    this.setState({
      tasks: [...narr],
    });
  };
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.currentTasks}
          onChange={(e) => this.handleChange(e)}
        />
        <button onClick={this.handleClick}>Submit</button>
        <ol>
          {this.state.tasks.map((ele) => (
            <li key={ele.id}>
              <p>{ele.task}</p>
              <button onClick={() => this.handleDelete(ele.id)}>Delete</button>
            </li>
          ))}
        </ol>
      </>
    );
  }
}
