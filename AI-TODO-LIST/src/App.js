// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';
import ProgressInsights from './components/ProgressInsights';
import Settings from './components/Settings';
import About from './components/About';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add-task" component={AddTask} />
        <Route path="/task/:id" component={TaskDetails} />
        <Route path="/progress" component={ProgressInsights} />
        <Route path="/settings" component={Settings} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;