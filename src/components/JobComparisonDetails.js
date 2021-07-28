import React from 'react';

function JobComparisonDetails(props) {
  const displayListOfKeyWords = () => {
    const jobKeyWords = props.jobPostingKeyWords;
    const { coverLetterKeyWords } = props;
    if (jobKeyWords !== undefined) {
      return (
        <div className='row'>
          <div className='col-6 card'>
            <p>Keywords We Found in Your Cover Letter</p>
            <ul>
              {coverLetterKeyWords.map(keyWord => (
                <li key={keyWord}>{keyWord}</li>
              ))}
            </ul>
          </div>
          <div className='col-6 card'>
            <p>Keywords We Found in the Job Posting</p>
            <ul>
              {jobKeyWords.map(keyWord => (
                <li key={keyWord}>{keyWord}</li>
              ))}
            </ul>
          </div>
          <button onClick={() => props.getScore()}>Get Score</button>
        </div>
      );
    }
  };

  return (
    <>
      <h2>{props.jobComparison.companyName}</h2>
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
    </>
  );
}

export default JobComparisonDetails;
