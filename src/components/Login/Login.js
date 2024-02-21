import './Login.css'
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Add authentication logic here (e.g., call an API)
    console.log('Username:', email);
    console.log('Password:', password);
  };

  return (
    <div className='container-fluid LoginDivmain'>
    <div className='LoginDiv '>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        
          <input  className='loginInput' placeholder='Email' type="text" value={email} onChange={handleUsernameChange} />
       
        <br />
       
          <input  className='loginInput' placeholder='password' type="password" value={password} onChange={handlePasswordChange} />
       
        <br />
        <button className='LoginButton' type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
