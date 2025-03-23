import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard'; // Import a dashboard or home component

function App() {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
        <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
        <Route path="/" element={loggedInUser ? <Dashboard /> : <Navigate to="/signup" />} />
      </Routes>
    </Router>
  );
}

export default App;