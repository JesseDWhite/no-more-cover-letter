import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import CoverLetter from './CoverLetter';

function CoverLetterList() {
  useFirestoreConnect([
    { collection: 'cover-letters' },
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
    <h3>Loading...</h3>
  );
}

export default CoverLetterList;
