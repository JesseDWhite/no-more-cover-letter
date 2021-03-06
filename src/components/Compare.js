/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import logo from '../img/cover-letter.png';

function Compare(props) {
  return (
    <>
      <div className='main-list'>
        <div
          className='card list-card col-3'
          onClick={() => props.viewJobComparison(
            props.id,
            props.coverLetter,
            props.jobPosting)}
        >
          View {props.companyName}
          <img
            className='card-image'
            src={logo}
            alt='memo with tab'
            width='100px'
          />
        </div>
      </div>
    </>
  );
}

export default Compare;
