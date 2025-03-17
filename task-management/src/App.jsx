import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import TaskDetail from './components/TaskDetail';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/task/:taskId" element={<TaskDetail />} />
          <Route path="/createtask" element={<createTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
