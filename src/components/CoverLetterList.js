import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import CoverLetter from './CoverLetter';

function CoverLetterList(props) {
  useFirestoreConnect([
    { collection: 'coverLetters' },
  ]);

  const coverLetters = useSelector(state => state.firestore.ordered.coverLetters);

  if (isLoaded(coverLetters)) {
    return (
      <>
        {coverLetters.map(coverLetter => (
          <CoverLetter
            viewCoverLetter={props.viewCoverLetter}
            yourName={coverLetter.yourName}
            companyName={coverLetter.companyName}
            timeAdded={coverLetter.timeAdded}
            id={coverLetter.id}
            key={coverLetter.id}
          />
        ))}
        <button onClick={() => props.createCoverLetter()}>Add New Cover Letter</button>
      </>
    );
  }
  return (
    <h3>Loading All Cover Letters...</h3>
  );
}

export default CoverLetterList;
