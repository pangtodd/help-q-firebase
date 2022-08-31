import React from "react";
import { auth } from "./../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignIn(){
  function doSignUp(event){
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>{
        //TBD
      })
      .catch((error)=>{
        //TBD
      });
  }
  return (
    <React.Fragment>
    <h1>Sign up</h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
      </form>
    </React.Fragment>
  );
}

export default SignIn