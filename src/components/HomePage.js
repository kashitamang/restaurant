import React from 'react';
import { useState } from 'react';
import { signIn, signUp } from '../services/fetch-utils';

//component
export default function HomePage({ setUser }) {

//set state 
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');  
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');  

//functions------------------------------------------------------
//clearforms

//signup
  async function handleSignUp(e) {
    e.preventDefault();
    const user = await signUp(signUpEmail, signUpPassword);

    setUser(user);
  }

//sign in 
  async function handleSignIn(e) {
    e.preventDefault();
    const user = await signIn(signInEmail, signInPassword);

    setUser(user);
  }
//return HTML elements
  return (
    <div className='home-page'>
      <h3>Sign Up</h3>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input value={signUpEmail} onChange={e => setSignUpEmail(e.target.value)} />
        </label>
        <label>
          <input value={signUpPassword} type='password' onChange={e => setSignUpPassword(e.target.value)}/>
        </label>
        <button>Sign Up</button>
      </form>
      <h3>Already A User?</h3>
      <form onSubmit={handleSignIn}>
        <label>
          Email
          <input value={signInEmail} onChange={e => setSignInEmail(e.target.value)}/>
        </label>
        <label>
          <input value={signInPassword} type='password' onChange={e => setSignInPassword(e.target.value)}/>
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );

}
