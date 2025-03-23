import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login({ setLoggedInUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      setLoggedInUser(res.data);
      navigate('/'); // Navigate to the dashboard after successful login
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='Box'>
      <div className='Button'>
        <h2>Login</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <p>Username / Email / Phone</p>
          <div className='usernamebox'>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
              <button type="button" onClick={() => navigate('/signup')}>Signup</button>
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </div>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;