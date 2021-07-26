import React from 'react';

function JobComparisonDetails(props) {
  return (
    <>
      <h1>Details Page</h1>
      <p>{props.jobComparison.coverLetter}</p>
      <p>{props.jobComparison.jobPosting}</p>
      <p>Job Posting Key Words: {console.log(props.jobPostingKeywords)}</p>
      <p>Application Score: {props.yourScore}/{props.finalScore}</p>
      <button onClick={() => props.extractKeywords(props.jobComparison.coverLetter, props.jobComparison.jobPosting)}>
        Compare
      </button>
      <button onClick={() => props.getScore()}>Get Score</button>
      <button onClick={() => props.goBack()}> Go Back</button>
    </>
  );
}

export default JobComparisonDetails;
