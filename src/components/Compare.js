import React from 'react';

function Compare(props) {
  return (
    <>
      <p>{props.coverLetter}</p>
      <p>{props.jobPosting}</p>
      <button onClick={() => props.compareWord(props.coverLetter, props.jobPosting)}>Compare</button>
    </>
  );
}

export default Compare;
