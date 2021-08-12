import React from 'react';
import { Link } from 'react-router-dom';
// import firebase from 'firebase/app';

function Header() {
  // const isLoggedIn = () => {
  //   const loggedInUser = firebase.auth().currentUser;
  //   if (loggedInUser !== undefined || loggedInUser !== null) {
  //     return (
  //       <p>{loggedInUser.email}</p>
  //     );
  //   } else if (loggedInUser === undefined || loggedInUser === null) {
  //     return (
  //       <p>Sign In</p>
  //     );
  //   }
  // };
  return (
    <>
      <nav className='navbar sticky-top navbar-dark bg-dark'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            <img src='https://media.giphy.com/media/RH7HREzgpzUuWMeFJu/giphy.gif' width='80px' alt='paper and pencil' />
            No More Cover Letter</Link>
          <span className='navbar-text'>
            <Link to='/signin'>
              Account
            </Link>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Header;
