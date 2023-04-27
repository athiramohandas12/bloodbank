/*
import React from 'react';
import './App.css';
import LoginImage from './image 25.png';
import UserHome from "./UserHome";

function Register(props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [showAdminDash, setShowAdminDash] = React.useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    // Add code here to handle form submission for registering a new user
    setShowAdminDash(true);
  };

  return (
    <div className="admin-sign-container">
      {showAdminDash ? (
        <UserHome/>
      ) : (
        <>
          <div className="admin-sign-image-container">
            <img src={LoginImage} alt="Login" className="admin-sign-image" />
          </div>
          <form className="admin-sign-form" onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="name-input" className="admin-sign-label">
                Name:
              </label>
              <input
                type="text"
                id="name-input"
                className="admin-sign-input"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email-input" className="admin-sign-label">
                Email:
              </label>
              <input
                type="email"
                id="email-input"
                className="admin-sign-input"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password-input" className="admin-sign-label">
                Password:
              </label>
              <input
                type="password"
                id="password-input"
                className="admin-sign-input"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password-input" className="admin-sign-label">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirm-password-input"
                className="admin-sign-input"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="admin-sign-button">
                Register
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
export default Register;*/



import React from 'react';
import './App.css';
import LoginImage from './image 25.png';
import UserHome from "./UserHome";

function Register(props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [showAdminDash, setShowAdminDash] = React.useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      password,
      confirmPassword
    };
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      setShowAdminDash(true);
    })
    .catch(error => console.error(error));
  };

  return (
    <div className="admin-sign-container">
      {showAdminDash ? (
        <UserHome/>
      ) : (
        <>
          <div className="admin-sign-image-container">
            <img src={LoginImage} alt="Login" className="admin-sign-image" />
          </div>
          <form className="admin-sign-form" onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="name-input" className="admin-sign-label">
                Name:
              </label>
              <input
                type="text"
                id="name-input"
                className="admin-sign-input"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email-input" className="admin-sign-label">
                Email:
              </label>
              <input
                type="email"
                id="email-input"
                className="admin-sign-input"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password-input" className="admin-sign-label">
                Password:
              </label>
              <input
                type="password"
                id="password-input"
                className="admin-sign-input"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password-input" className="admin-sign-label">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirm-password-input"
                className="admin-sign-input"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="admin-sign-button">
                Register
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Register;
 