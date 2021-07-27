import React from 'react';

function JobComparisonDetails(props) {
  const test = () => {
    const words = props.jobPostingKeyWords;
    if (words !== undefined) {
      return (
        <ul>
          {words.map(keyWord => (
            <li key={keyWord}>{keyWord}</li>
          ))}
        </ul>
      );
    }
  };
  return (
    <>
      <h1>Details Page</h1>
      <div className='row'>
        <div className='col-6 card'>
          <h3>Cover Letter</h3>
          <p>{props.jobComparison.coverLetter}</p>
        </div>
        <div className='col-6 card'>
          <h3>Job Posting</h3>
          <p>{props.jobComparison.jobPosting}</p>
        </div>
      </div>
      <p>Job Posting Key Words:</p>
      <p>{props.jobPostingKeyWords}</p>
      <p>{test()}</p>
      {/* <ul>
        {props.jobPostingKeyWords.map(keyWord => (
          <li>{keyWord}</li>
        ))}
      </ul> */}
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
