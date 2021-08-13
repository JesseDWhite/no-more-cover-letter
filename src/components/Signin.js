import React from 'react';
import firebase from 'firebase/app';
import { Link } from 'react-router-dom';

function Signin() {
  function doSignUp(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() =>
      console.log('You have successfully signed up!')
    ).catch(error => {
      console.log(error.message);
    });
  }

  function doSignIn(e) {
    e.preventDefault();
    const email = e.target.signinEmail.value;
    const password = e.target.signinPassword.value;
    return (
      firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        console.log('You have successfully signed in!');
      }).catch(error => {
        console.log(error.message);
      })
    );
  }

  function doSignOut() {
    firebase.auth().signOut().then(() => {
      console.log('You have been signed out.');
    }).catch(error => {
      console.log(error.message);
    });
  }

  const isSignedIn = () => {
    if (firebase.auth().currentUser !== null) {
      return (
        <div>
          <button className='btn btn-danger btn-sm' onClick={doSignOut} id='signout-button'>Sign Out</button>
        </div>
      );
    }
  };

  return (
    <>
      <div className='card job-compare-card'>
        <div className='row'>
          {isSignedIn()}
          <Link to='/'><button className='btn btn-dark btn-sm' id='home-button'>Home</button></Link>
          <div className='col-lg-6 card'>
            <h2>Sign Up</h2>
            <form onSubmit={doSignUp}>
              <input
                className='form-control'
                type='text'
                name='email'
                placeholder='Email'
                required
              />
              <input
                className='form-control'
                type='password'
                name='password'
                placeholder='Password'
                required
              />
              <button className='btn btn-primary' type='submit'>Sign Up</button>
            </form>
          </div>
          <div className='col-lg-6 card'>
            <h2>Sign In</h2>
            <form onSubmit={doSignIn} className='needs-validation'>
              <input
                className='form-control'
                type='text'
                name='signinEmail'
                placeholder='Email'
                required
              />
              <input
                className='form-control'
                type='password'
                name='signinPassword'
                placeholder='Password'
                required
              />
              <button className='btn btn-primary mb-3' type='submit'>Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
