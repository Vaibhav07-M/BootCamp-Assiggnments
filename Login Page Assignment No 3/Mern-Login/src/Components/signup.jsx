import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './signup.css';

function Signup({ users, setUsers }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
      setUsers([...users, res.data]);
      navigate('/login'); // Navigate to the login page after successful signup
    } catch (err) {
      setError('User already exists');
    }
  };

  return (
    <div className='Box'>
      <div className='Button'>
        <h2>Signup</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <p>Username</p>
          <div className='usernamebox'>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <p>Email</p>
            <div className='usernamebox'>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <p>Password</p>
            <div className='usernamebox'>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="eye-button"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>
          <br />
          <div className="loginsignuppagechange">
            <div>
              <button type="submit">Signup</button>
            </div>
            <div>
              <button type="button" onClick={() => navigate('/login')}>Login</button>
            </div>
          </div>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Signup;