import React from 'react';
import firebase from 'firebase/app';

function Signin() {
  function doSignUp(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      console.log('you successfully signed up!');
    }).catch(error => {
      console.log(error.message);
    });
  }
  function doSignIn(e) {
    e.preventDefault();
    const email = e.target.signinEmail.value;
    const password = e.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      console.log('successfully signed in!');
    }).catch(error => {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(() => {
      console.log('you have been signed out');
    }).catch(error => {
      console.log(error.message);
    });
  }
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='Email'
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
        />
        <button type='submit'>Sign Up</button>
      </form>
      <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='Email'
        />
        <input
          type='password'
          name='signinPassword'
          placeholder='Password'
        />
        <button type='submit'>Sign In</button>
      </form>
      <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign Out</button>
    </>
  );
}

export default Signin;
