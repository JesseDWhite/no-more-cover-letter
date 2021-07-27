import React from 'react';

function JobComparisonDetails(props) {
  const displayListOfKeyWords = () => {
    const jobKeyWords = props.jobPostingKeyWords;
    const { coverLetterKeyWords } = props;
    if (jobKeyWords !== undefined) {
      return (
        <div className='row'>
          <div className='col-4'>
            <p>Keywords We Found in the Job Posting</p>
            <ul>
              {jobKeyWords.map(keyWord => (
                <li key={keyWord}>{keyWord}</li>
              ))}
              <button onClick={() => props.getScore()}>Get Score</button>
            </ul>
          </div>
          <div className='col-4'>
            <p>Keywords We Found in Your Cover Letter</p>
            <ul>
              {coverLetterKeyWords.map(keyWord => (
                <li key={keyWord}>{keyWord}</li>
              ))}
            </ul>
          </div>
        </div>
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
      {displayListOfKeyWords()}
      <p>Keywords that match: {props.yourScore}/{props.totalScore}</p>
      <p>Cover Letter Grade: {props.yourPercentage}%</p>
      <button onClick={() => props.extractKeywords(
        props.jobComparison.coverLetter,
        props.jobComparison.jobPosting)}
      >
        Compare
      </button>
      <button onClick={() => props.deleteJobComparison(props.id)}>Delete</button>
      <button onClick={() => props.editJobComparison()}>Edit</button>
      <button onClick={() => props.goBack()}>Go Back</button>
      {props.button}
    </>
  );
}

export default JobComparisonDetails;
