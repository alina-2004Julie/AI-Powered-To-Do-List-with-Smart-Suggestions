// src/components/TaskDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { db } from '../firebase';

function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchTask = async () => {
      const doc = await db.collection('tasks').doc(id).get();
      if (doc.exists) {
        setTask({ id: doc.id, ...doc.data() });
      } else {
        console.log('No such document!');
        history.push('/'); //redirect if task is not found.
      }
    };
    fetchTask();
  }, [id, history]);

  const handleDelete = async () => {
    await db.collection('tasks').doc(id).delete();
    history.push('/');
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>Description: {task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TaskDetails;