import React from 'react';

function Compare(props) {
  return (
    <>
      <button onClick={() => props.extractKeywords(props.coverLetter, props.jobPosting)}>Compare</button>
      <button onClick={() => props.getScore()}>Get Score</button>
      <button onClick={() => props.viewJobComparison(props.id)}>View {props.jobPosting}</button>
    </>
  );
}

export default Compare;
