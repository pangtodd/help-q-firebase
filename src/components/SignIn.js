import React, { useState } from "react";
import { auth } from "./../firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailandPassword } from "firebase/auth";

function SignIn(){
  const [signUpSuccess, setSignUpSuccess] =useState(null);
  const [signInSuccess, setSignInSuccess] = useState(null);

  function doSignUp(event){
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>{
        setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`)
      })
      .catch((error)=>{
        setSignUpSuccess(`There was an error signing up: ${error.message}!`)
      });
  }

  function doSignIn(event){
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password= event.target.signinPassword.value;
    signInWithEmailandPassword(auth, email, password)
      .then((userCredential)=>{
        setSignInSuccess(`You've done it! You're signed in as ${userCredential.user.email}!`)
      })
      .catch((error)=> {
        setSignInSuccess(`There was an error signing in: ${error.message}!`)
      });
  }

  return (
    <React.Fragment>
    <h1>Sign up</h1>
    {signUpSuccess}
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
          <br></br>
          <br></br>
        <input
          type='password'
          name='password'
          placeholder='Password' />
          <br></br>
          <br></br>
          <button type='submit'>Submit!</button>
      </form>

      <h1>Sign in</h1>
      {signInSuccess}
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='email' />
          <br></br>
          <br></br>
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' />
          <br></br>
          <br></br>
          <button type='submit'>Submit!</button>
      </form>
    </React.Fragment>
  );
}

export default SignIn