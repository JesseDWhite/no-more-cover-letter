import React from 'react';

function Compare(props) {
  return (
    <>
      <div className='col-3'>
        <button onClick={() => props.viewJobComparison(
          props.id,
          props.coverLetter,
          props.jobPosting)}
        >
          View {props.companyName}
        </button>
      </div>
    </>
  );
}

export default Compare;
