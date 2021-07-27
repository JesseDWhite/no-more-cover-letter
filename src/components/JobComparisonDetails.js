import React from 'react';

function JobComparisonDetails(props) {
  return (
    <>
      <h1>Details Page</h1>
      <p>{props.jobComparison.coverLetter}</p>
      <p>{props.jobComparison.jobPosting}</p>
      {/* <p>Job Posting Key Words: {props.jobPostingKeyWords.map(keyWord => (
        <li>{keyWord}</li>
      ))}</p> */}
      <ul>Job Posting Key Words: {props.jobPostingKeyWords}</ul>
      <p>Application Score: {props.yourScore}/{props.totalScore}</p>
      <button onClick={() => props.extractKeywords(props.jobComparison.coverLetter, props.jobComparison.jobPosting)}>
        Compare
      </button>
      <button onClick={() => props.getScore()}>Get Score</button>
      <button onClick={() => props.goBack()}>Go Back</button>
      {props.button}
    </>
  );
}

export default JobComparisonDetails;
