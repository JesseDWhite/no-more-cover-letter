import React from 'react';
// import { useSelector } from 'react-redux';

function JobComparisonDetails(props) {
  // const test = useSelector(state => state);
  // console.log(test);
  return (
    <>
      <h1>Details Page</h1>
      <p>{props.jobComparison.coverLetter}</p>
      <p>{props.jobComparison.jobPosting}</p>
      <p>Job Posting Key Words: {console.log(props.jobPostingKeyWords)}</p>
      <p>Application Score: {props.yourScore}/{props.finalScore}</p>
      {/* {console.log(test)} */}
      <button onClick={() => props.extractKeywords(props.jobComparison.coverLetter, props.jobComparison.jobPosting)}>
        Compare
      </button>
      <button onClick={() => props.getScore()}>Get Score</button>
      <button onClick={() => props.goBack()}>Go Back</button>
    </>
  );
}

export default JobComparisonDetails;
