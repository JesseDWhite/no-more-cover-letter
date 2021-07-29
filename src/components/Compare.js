/* eslint-disable global-require */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function Compare(props) {
  return (
    <>
      <div className='main-list'>
        <div
          className='card col-12 list-card'
          onClick={() => props.viewJobComparison(
            props.id,
            props.coverLetter,
            props.jobPosting)}
        >
          View {props.companyName}
          <img src='./../img/cover-letter.png' alt='memo with tab' />
        </div>
      </div>
    </>
  );
}

export default Compare;
