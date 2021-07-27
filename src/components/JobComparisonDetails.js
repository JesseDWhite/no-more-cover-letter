import React from 'react';

function JobComparisonDetails(props) {
  return (
    <>
      <h1>Details Page</h1>
      <p>{props.jobComparison.coverLetter}</p>
      <p>{props.jobComparison.jobPosting}</p>
      <p>Job Posting Key Words:</p>
      <ul>{props.jobPostingKeyWords}</ul>
      <p>Keywords that match: {props.yourScore}/{props.totalScore}</p>
      <p>Cover Letter Grade: {props.yourPercentage}%</p>
      <button onClick={() => props.extractKeywords(props.jobComparison.coverLetter, props.jobComparison.jobPosting)}>
        Compare
      </button>
      <button onClick={() => props.getScore()}>Get Score</button>
      <button onClick={() => props.editJobComparison()}>Edit</button>
      <button onClick={() => props.goBack()}>Go Back</button>
      {props.button}
    </>
  );
}

export default JobComparisonDetails;
