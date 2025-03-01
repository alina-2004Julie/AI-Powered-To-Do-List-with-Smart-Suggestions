// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import TaskList from '../components/TaskList';
import { Link } from 'react-router-dom';

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from Firestore
    const unsubscribe = db.collection('tasks').onSnapshot((snapshot) => {
      const taskList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setTasks(taskList);
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  return (
    <div>
      <h1>My To-Do List</h1>
      <Link to="/add-task">Add Task</Link>
      <TaskList tasks={tasks} />
      {/* Catch-Up Mode and Smart Prioritization logic will go here */}
    </div>
  );
}

export default Home;