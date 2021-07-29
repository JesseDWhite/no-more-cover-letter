import React from 'react';
import firebase from 'firebase/app';

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
      <div className='card job-compare-card'>
        <div className='row'>
          <div className='col-6 card'>
            <h2>Sign Up</h2>
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
              <button className='btn btn-primary' type='submit'>Sign Up</button>
            </form>
          </div>
        </div>
        <div className='row'>
          <div className='col-6 card'>
            <h2>Sign In</h2>
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
              <button className='btn btn-primary mb-3' type='submit'>Sign In</button>
            </form>
            <button className='btn btn-danger' onClick={doSignOut}>Sign Out</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
