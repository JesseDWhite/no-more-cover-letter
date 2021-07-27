import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import Compare from './Compare';

function CompareList(props) {
  useFirestoreConnect([
    { collection: 'jobComparisons' },
  ]);

  const jobComparisons = useSelector(state => state.firestore.ordered.jobComparisons);

  if (isLoaded(jobComparisons)) {
    return (
      <>
        {jobComparisons.map(jobComparison => (
          <Compare
            viewJobComparison={props.viewJobComparison}
            companyName={jobComparison.companyName}
            id={jobComparison.id}
            key={jobComparison.id}
          />
        ))}
        <button className='btn btn-primary' onClick={() => props.createJobComparison()}>Add New Job Comparison</button>
      </>

    );
  }
  return (
    <h3>Loading All Cover Letters and Job Postings...</h3>
  );
}

export default CompareList;
