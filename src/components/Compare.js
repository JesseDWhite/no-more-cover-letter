import React from 'react';

function Compare(props) {
  return (
    <>
      {/* <button onClick={() => props.extractKeywords(props.coverLetter, props.jobPosting)}>Compare</button>
      <button onClick={() => props.getScore()}>Get Score</button> */}
      <button onClick={() => props.deleteJobComparison(props.id)}>Delete {props.companyName}</button>
      <button onClick={() => props.viewJobComparison(props.id)}>View {props.companyName}</button>
    </>
  );
}

export default Compare;
