// src/components/AddTask.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { useHistory } from 'react-router-dom';

function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.collection('tasks').add({
      title,
      description,
      dueDate,
      // Add other fields like priority, category
    });
    history.push('/'); // Redirect to home after adding
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;