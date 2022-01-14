import React from 'react';
import useAuth from "../../services/firebase/useAuth";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

  const { signInEmailUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const { email, password } = data;
      await signInEmailUser(email, password);
      navigate('/');
    } catch (e) {
      alert(e.message);
    }
  }

  const handleClick = (e) => {
    
    e.preventDefault();
    let status = true;

    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = {email, password};

    if (!email) { status = false; }
    if (!password) { status = false; }

    if(status === true){
      handleLogin(data);
    } else {
      alert("Error! Invalid entry.");
    }
    
  };

  return (
    <div className='account__panel'>
      <h1>Sign In</h1>
      <form onSubmit={handleClick}>
        <input type='email' placeholder='email' name='email' />
        <input type='password' placeholder='password' name='password' />
        <input className='submit' type='submit' value='Sign In' />
      </form>
    </div>
  );
};

export default Login;