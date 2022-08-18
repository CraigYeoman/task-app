// Overview.js

import React from "react";

const Overview = (props) => {
  const { tasks, deleteTask } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{task.text} <button onClick={(e) => this.deleteTask(task.id, e)}>
        Delete Task
      </button></li>;
      })}
    </ul>
  );
};

export default Overview;