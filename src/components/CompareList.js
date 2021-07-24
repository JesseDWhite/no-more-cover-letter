import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import Compare from './Compare';

function CompareList(props) {
  useFirestoreConnect([
    { collection: 'testCase' },
  ]);

  const testCase = useSelector(state => state.firestore.ordered.testCase);

  if (isLoaded(testCase)) {
    return (
      <>
        {testCase.map(test => (
          <Compare
            compareWord={props.compareWord}
            coverLetter={test.coverLetter}
            jobPosting={test.jobPosting}
            id={test.id}
            key={test.id}
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
