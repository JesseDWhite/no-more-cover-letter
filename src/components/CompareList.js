import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import Compare from './Compare';

function CompareList() {
  useFirestoreConnect([
    { collection: 'testCase' },
  ]);

  const testCase = useSelector(state => state.firestore.ordered.testCase);

  if (isLoaded(testCase)) {
    return (
      <>
        {testCase.map(test => (
          <Compare
            coverLetter={test.coverLetter}
            jobPosting={test.jobPosting}
          />
        ))}
      </>
    );
  }
  return (
    <h3>Loading All Cover Letters and Job Postings...</h3>
  );
}

export default CompareList;
