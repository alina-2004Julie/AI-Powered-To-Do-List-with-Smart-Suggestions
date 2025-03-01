// src/components/TaskList.js
import React from 'react';
import { Link } from 'react-router-dom';

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Link to={`/task/${task.id}`}>{task.title}</Link>
          {/* Display other task details */}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;