import React from 'react';
import firebase from 'firebase/app';
import { Link } from 'react-router-dom';

function Signin() {
  function doSignUp(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      <p>You Successfully Signed Up!</p>;
    }).catch(error => {
      console.log(error.message);
    });
  }
  function doSignIn(e) {
    e.preventDefault();
    const email = e.target.signinEmail.value;
    const password = e.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      <p>You Successfully Signed In!</p>;
    }).catch(error => {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(() => {
      <p>You Have Been Signed Out</p>;
    }).catch(error => {
      console.log(error.message);
    });
  }
  return (
    <>
      <Link to='/'>Home</Link>
      <div className='row'>
        <div className='col-6 card'>
          <h1>Sign Up</h1>
          <form onSubmit={doSignUp}>
            <input
              className='form-control'
              type='text'
              name='email'
              placeholder='Email'
            />
            <input
              className='form-control'
              type='password'
              name='password'
              placeholder='Password'
            />
            <button type='submit'>Sign Up</button>
          </form>
        </div>
        <div className='col-6 card'>
          <h1>Sign In</h1>
          <form onSubmit={doSignIn}>
            <input
              className='form-control'
              type='text'
              name='signinEmail'
              placeholder='Email'
            />
            <input
              className='form-control'
              type='password'
              name='signinPassword'
              placeholder='Password'
            />
            <button type='submit'>Sign In</button>
          </form>
        </div>
      </div>
      <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign Out</button>
    </>
  );
}

export default Signin;
