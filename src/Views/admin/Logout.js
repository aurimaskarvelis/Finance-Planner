import React, { useEffect } from 'react';
import useAuth from "../../services/firebase/useAuth";
import { useNavigate } from 'react-router-dom';


function Logout(props) {

  const { signUserOut } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    signUserOut();
    navigate('/');
  }

  return (
    <div className='logout'>
      <h1>Are you sure you wish to log out?</h1>
      <button type="button" onClick={handleClick}>
        LOG OUT
      </button>
    </div>
  );

};

Logout.propTypes = {};

export default Logout;