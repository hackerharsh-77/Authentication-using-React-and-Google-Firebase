// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword,  onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"; //for everything related to firebase authentication
import { useEffect, useState } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
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
