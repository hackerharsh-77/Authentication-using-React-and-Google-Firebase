import React from 'react';
import { useRef } from "react";
import { useState } from "react";
import {login, useAuth, logout} from "./firebase";
import {useNavigate} from 'react-router-dom';

function Dashboard() {
  const [loading, setLoading] = useState(false); //by default signup button will be enabled no loading
  const currentUser = useAuth() //get the current user details
  const emailRef = useRef(); //to get user email id 
  const passwordRef = useRef(); // to get user password
  const navigate = useNavigate();

  async function handleLogout(){
    setLoading(true);
    try{
      await logout()
      navigate("/")
    } catch{
      alert("error!");
    }
    setLoading(false);
  }
  
  return (
    <div>
      <h1>this is dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard