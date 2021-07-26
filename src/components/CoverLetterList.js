import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import CoverLetter from './CoverLetter';
import JobPosting from './JobPosting';

function CoverLetterList(props) {
  useFirestoreConnect([
    { collection: 'coverLetters' },
    { collection: 'jobPostings' },
  ]);

  const coverLetters = useSelector(state => state.firestore.ordered.coverLetters);
  const jobPostings = useSelector(state => state.firestore.ordered.jobPostings);

  if (isLoaded(coverLetters && jobPostings)) {
    return (
      <>
        {jobPostings.map(jobPosting => (
          <JobPosting
            companyName={jobPosting.companyName}
          />
        ))}
        {coverLetters.map(coverLetter => (
          <CoverLetter
            viewCoverLetter={props.viewCoverLetter}
            deleteCoverLetter={props.deleteCoverLetter}
            getScore={props.getScore}
            yourName={coverLetter.yourName}
            companyName={coverLetter.companyName}
            introParagraph={coverLetter.introParagraph}
            bodyParagraphOne={coverLetter.bodyParagraphOne}
            bodyParagraphTwo={coverLetter.bodyParagraphTwo}
            conclusion={coverLetter.conclusion}
            timeAdded={coverLetter.timeAdded}
            id={coverLetter.id}
            key={coverLetter.id}
          />
        ))}
        <button onClick={() => props.createCoverLetter()}>Add New Cover Letter</button>
        <button onClick={() => props.createJobPosting()}>Add New Job Posting</button>
      </>
    );
  }
  return (
    <h3>Loading All Cover Letters...</h3>
  );
}

export default CoverLetterList;
