import React from 'react';

function JobComparisonDetails(props) {
  const determineGrade = () => {
    const jobKeyWords = props.jobPostingKeyWords;
    const yourGrade = props.yourPercentage;
    if (jobKeyWords !== undefined) {
      if (yourGrade < 20) {
        return (
          <p>F</p>
        );
      } else if (yourGrade >= 20 && yourGrade < 40) {
        return (
          <p>D</p>
        );
      } else if (yourGrade >= 40 && yourGrade < 60) {
        return (
          <p>C</p>
        );
      } else if (yourGrade >= 60 && yourGrade <= 80) {
        return (
          <p>B</p>
        );
      } else if (yourGrade >= 80) {
        return (
          <p>A</p>
        );
      }
    } else {
      return (
        <p>Not Yet Graded</p>
      );
    }
  };
  const displayListOfKeyWords = () => {
    const jobKeyWords = props.jobPostingKeyWords;
    const { coverLetterKeyWords } = props;
    if (jobKeyWords !== undefined) {
      return (
        <div>
          <div className='row'>
            <button className='btn btn-success mb-3' onClick={() => props.getScore()}>Get Score</button>
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
        </div>
      );
    }
  };

  return (
    <>
      <div className='card job-compare-card'>
        <h2 className='card-title'>{props.jobComparison.companyName}</h2>
        <div className='row mt-5'>
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
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Cover Letter Percentage</h5>
              <div className='card-text'>
                <div className='progress' style={{ height: '5em' }}>
                  <div
                    className='progress-bar progress-bar-striped progress-bar-animated'
                    role='progressbar'
                    aria-valuenow={props.yourPercentage}
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: `${props.yourPercentage}%` }}
                  >
                    <h5 className='mt-2'>{props.yourPercentage}%</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row score-card'>
          <div className='col-6'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Keywords That Match</h5>
                <div className='card-text'>
                  <p>{props.yourScore}/{props.totalScore}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Your Grade</h5>
                <div className='card-text'>
                  {determineGrade()}
                </div>
              </div>
            </div>
          </div>
        </div>
        {displayListOfKeyWords()}
      </div>
      {/* <div className='row'>
        <div className='col-6 card'>
          <h3>Cover Letter</h3>
          <p>{props.jobComparison.coverLetter}</p>
        </div>
        <div className='col-6 card'>
          <h3>Job Posting</h3>
          <p>{props.jobComparison.jobPosting}</p>
        </div>
      </div> */}
    </>
  );
}

export default JobComparisonDetails;
