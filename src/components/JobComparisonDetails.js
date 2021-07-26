import React from 'react';

function JobComparisonDetails(props) {
  return (
    <>
      <h1>Details Page</h1>
      <p>{props.jobComparison.coverLetter}</p>
      <p>{props.jobComparison.jobPosting}</p>
      <button onClick={() => props.extractKeywords(props.jobComparison.coverLetter, props.jobComparison.jobPosting)}>
        Compare
      </button>
      <button onClick={() => props.getScore()}>Get Score</button>
      <button onClick={() => props.goBack()}> Go Back</button>
    </>
  );
}

export default JobComparisonDetails;
