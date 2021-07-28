import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  const StyledHeader = styled.nav`{
    width: 100%;
  }`;
  return (
    <>
      <StyledHeader>
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
      </StyledHeader>
    </>
  );
}

export default Header;
