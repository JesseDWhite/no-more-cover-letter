import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <>
      <nav className='navbar sticky-top navbar-dark bg-dark'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            <img src='https://media.giphy.com/media/RH7HREzgpzUuWMeFJu/giphy.gif' width='80px' alt='paper and pencil' />
            No More Cover Letter</Link>
          <span><button
            className='btn btn-primary'
            onClick={() => props.createJobComparison()}
          >
            Add New Job Comparison</button></span>
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
