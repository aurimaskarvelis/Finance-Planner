import React from 'react';
import useAuth from "../../services/firebase/useAuth";
import { useNavigate } from 'react-router-dom';

function Join(props) {

  const { createEmailUser } = useAuth();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    let status = true;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const repeat_password = e.target.repeat_password.value;
    const data = {email, password};

    if (!email) { status = false; }
    if (!password) { status = false; }
    if (!repeat_password) { status = false; }
    if(password !== repeat_password){ status = false; }
    if(status === true){
      handleEmailSubmit(data);
    } else {
      alert("Error! Invalid entry.");
    }
  };

  const handleEmailSubmit = async (data) => {
    try {
      const { email, password } = data;
      await createEmailUser(email, password);
      navigate('/dashboard');
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className='account__panel'>
      <h1>Register</h1>
      <form onSubmit={handleClick}>
        <input value={props.email} type='email' placeholder='email' name='email' />
        <input value={props.password} type='password' placeholder='password' name='password' />
        <input type='password' placeholder='repeat password' name='repeat_password' />
        <input className='submit' type='submit' value='Register' />
      </form>
    </div>
  );
}

Join.propTypes = {};

export default Join;