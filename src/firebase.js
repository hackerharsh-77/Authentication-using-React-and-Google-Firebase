// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword,  onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"; //for everything related to firebase authentication
import { useEffect, useState } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMCQG9upg7vvXG0kP3LkaJVWWYVIhZY68",
    authDomain: "sih-rk762.firebaseapp.com",
    projectId: "sih-rk762",
    storageBucket: "sih-rk762.appspot.com",
    messagingSenderId: "1006591018671",
    appId: "1:1006591018671:web:d968d74987cc88cce4365a",
    measurementId: "G-VFSFSQNMNQ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
    
export function signup(email,password){
    return createUserWithEmailAndPassword(auth,email,password); //registers a user with email id and password
}
export function login(email,password){
    return signInWithEmailAndPassword(auth,email,password); //registers a user with email id and password
}

export function logout(){
    return signOut(auth);
}
//custom react hook

export function useAuth() {
    const [currentUser, setCurrentUser] = useState(); //to store current user

    useEffect(()=>{
       const unsub = onAuthStateChanged(auth, (user)=>{setCurrentUser(user)}) //get user
       return unsub;
    }, [])
    return currentUser;
}
