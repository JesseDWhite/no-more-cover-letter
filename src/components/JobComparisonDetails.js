import React from 'react';

function JobComparisonDetails(props) {
  const determineGrade = () => {
    const jobKeyWords = props.jobPostingKeyWords;
    const yourGrade = props.yourPercentage;
    if (jobKeyWords !== undefined) {
      if (yourGrade < 20) {
        return (
          <p id='grade-f'>F</p>
        );
      } else if (yourGrade >= 20 && yourGrade < 40) {
        return (
          <p id='grade-d'>D</p>
        );
      } else if (yourGrade >= 40 && yourGrade < 60) {
        return (
          <p id='grade-c'>C</p>
        );
      } else if (yourGrade >= 60 && yourGrade <= 80) {
        return (
          <p id='grade-b'>B</p>
        );
      } else if (yourGrade >= 80) {
        return (
          <p id='grade-a'>A</p>
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
          <div className='score-button'>
            <button className='btn btn-success' center onClick={() => props.getScore()}>
              Find Out Your Grade
            </button>
          </div>
          <div className='row'>
            <div className='col-6 card keyword-card'>
              <h4>Keywords We Found in Your Cover Letter</h4>
              <ul>
                {coverLetterKeyWords.map(keyWord => (
                  <li key={keyWord}>{keyWord}</li>
                ))}
              </ul>
            </div>
            <div className='col-6 card keyword-card'>
              <h4>Keywords We Found in this Job Posting</h4>
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
        <h1 className='card-title'><em>{props.jobComparison.companyName}</em></h1>
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
          <div className='card mt-3'>
            <div className='card-body'>
              <h4 className='card-title'>Coverage of Keywords</h4>
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
                    <h4 className='mt-2'>{props.yourPercentage}% of keywords addressed. Keep it up!</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row score-card mb-5'>
          <div className='col-6'>
            <div className='card score-view'>
              <div className='card-body'>
                <h4 className='card-title'>Keywords That Match</h4>
                <div className='card-text'>
                  <p>{props.yourScore}/{props.totalScore}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='card score-view'>
              <div className='card-body'>
                <h4 className='card-title'>Your Grade</h4>
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
