// Overview.js

import React from "react";

const Overview = ({ tasks, deleteTask}) => {
 
  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{task.text} <button id={task.id} onClick={deleteTask}>
        Delete Task
      </button></li>;
      })}
    </ul>
  );
};

export default Overview;