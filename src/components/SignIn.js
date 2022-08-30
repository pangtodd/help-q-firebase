import React from "react";

function SignIn(){
  
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