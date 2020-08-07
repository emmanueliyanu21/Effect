import React from 'react';
import TaskForm from './component/taskForm.js';
import JobForm from './component/jobForm.js';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <TaskForm />
      <JobForm />
    </div>
  );
}

export default App;
