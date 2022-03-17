import React from 'react';
import { useRef } from "react";
import { useState } from "react";
import {login, useAuth} from "./firebase";
import {useNavigate} from 'react-router-dom';

function Login() {
    
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth()

    const emailRef = useRef(); 
    const passwordRef = useRef();

    const navigate = useNavigate();


    async function handleLogin(){ //async because it is an api call
        try{
          setLoading(true); //while user is getting registered disable signup button
          
          await login(emailRef.current.value,passwordRef.current.value); //sending email id and password as promise
          console.log("yay you are logged in")
          navigate("/dashboard");
        }
        catch{
          alert("Error! ")
        }
        setLoading(false)
      }
  return (
    <div>
        <form>
            <input ref={emailRef}type="email" placeholder="email" />
            <input ref={passwordRef} type="password" placeholder="password" />
        </form>
        <button onClick={handleLogin}>Log in</button>
    </div>
  )
}

export default Login