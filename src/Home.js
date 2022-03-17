import React from 'react'
import {useNavigate} from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    function handleRegister(){
        navigate("/signup");
    }
    function handleLogin(){
        navigate("/login")
    }
  return (
    <div>
        <h1>this is my website bishh</h1>
       
        <button onClick={handleRegister}>Register with us</button>
        <button onClick={handleLogin}>Log in karo na</button>
    </div>
  )
}

export default Home