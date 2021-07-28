/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

function JobComparisonDetails(props) {
  const displayListOfKeyWords = () => {
    const jobKeyWords = props.jobPostingKeyWords;
    const { coverLetterKeyWords } = props;
    if (jobKeyWords !== undefined) {
      return (
        <div className='row'>
          <button className='btn btn-success' onClick={() => props.getScore()}>Get Score</button>
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
        </div>
      );
    }
  };

  return (
    <>
      <h2>{props.jobComparison.companyName}</h2>
      <div className='card'>
        <div className='row'>
          <div className='col-3'>
            <button
              className='btn btn-dark'
              onClick={() => props.extractKeywords(
                props.jobComparison.coverLetter,
                props.jobComparison.jobPosting)}
            >
              Compare
            </button>
          </div>
          <div className='col-3'>
            <button className='btn btn-dark' onClick={() => props.deleteJobComparison(props.id)}>Delete</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-dark' onClick={() => props.editJobComparison()}>Edit</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-dark' onClick={() => props.goBack()}>Go Back</button>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Keywords That Match</h5>
              <div className='card-text'>
                <p>{props.yourScore}/{props.totalScore}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Cover Letter Grade</h5>
              <div className='card-text'>
                <div className='progress' style={{ height: '3rem' }}>
                  <div
                    className='progress-bar progress-bar-striped progress-bar-animated'
                    role='progressbar'
                    aria-valuenow={props.yourPercentage}
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: `${props.yourPercentage}%` }}
                  >
                    {props.yourPercentage}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {displayListOfKeyWords()}
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
