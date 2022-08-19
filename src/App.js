// App.js

import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: { text: '',
              id: uniqid()
            },
      tasks: [],
    };

    this.deleteTask = this.deleteTask.bind(this);
  }
  
  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id,
      }
    });
  };
  
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '',
              id: uniqid()
            },
    });
  };

  deleteTask = (e) => {
    console.log(e.target.id);
    console.log(this.state.tasks)
    //e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== e.target.id)
    })
    console.log(this.state.tasks)
    };

  render() {
    const { task, tasks } = this.state;
  
  return (
    <div>
      <form onSubmit={this.onSubmitTask}>
        <label htmlFor="taskInput">Enter task</label>
        <input
          onChange={this.handleChange}
          value={task.text}
          type="text"
          id="taskInput"
        />
        <button type="submit">
          Add Task
        </button>
      </form>
      <Overview tasks={tasks} deleteTask={this.deleteTask} />
    </div>
    );
  }
}

export default App;