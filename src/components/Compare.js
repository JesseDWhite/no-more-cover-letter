import React from 'react';

function Compare(props) {
  return (
    <>
      <p>{props.coverLetter}</p>
      <p>{props.jobPosting}</p>
      <button onClick={() => props.extractKeywords(props.coverLetter, props.jobPosting)}>Compare</button>
      <button onClick={() => props.getScore()}>Get Score</button>
      <button onClick={() => props.viewJobComparison(props.id)}>View Job Comparison</button>
    </>
  );
}

export default Compare;
