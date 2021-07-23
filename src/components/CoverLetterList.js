import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import CoverLetter from './CoverLetter';

function CoverLetterList() {
  useFirestoreConnect([
    { collection: 'coverLetters' },
  ]);

  const coverLetters = useSelector(state => state.firestore.ordered.coverLetters);

  if (isLoaded(coverLetters)) {
    return (
      <>
        {coverLetters.map(coverLetter => (
          <CoverLetter
            yourName={coverLetter.yourName}
            timeAdded={coverLetter.timeAdded}
            id={coverLetter.id}
            key={coverLetter.id}
          />
        ))}
      </>
    );
  }
  return (
    <h3>Loading All Cover Letters...</h3>
  );
}

export default CoverLetterList;
