import React from 'react';

function JobComparisonDetails(props) {
  return (
    <>
      <h1>Details Page</h1>
      <div className='row'>
        <div className='col-6'>
          <h3>Cover Letter</h3>
          <p>{props.jobComparison.coverLetter}</p>
        </div>
        <div className='col-6'>
          <h3>Job Posting</h3>
          <p>{props.jobComparison.jobPosting}</p>
        </div>
      </div>
      <p>Job Posting Key Words:</p>
      <ul>{props.jobPostingKeyWords}</ul>
      <p>Keywords that match: {props.yourScore}/{props.totalScore}</p>
      <p>Cover Letter Grade: {props.yourPercentage}%</p>
      <button onClick={() => props.extractKeywords(props.jobComparison.coverLetter, props.jobComparison.jobPosting)}>
        Compare
      </button>
      <button onClick={() => props.getScore()}>Get Score</button>
      <button onClick={() => props.deleteJobComparison(props.id)}>Delete</button>
      <button onClick={() => props.editJobComparison()}>Edit</button>
      <button onClick={() => props.goBack()}>Go Back</button>
      {props.button}
    </>
  );
}

export default JobComparisonDetails;
