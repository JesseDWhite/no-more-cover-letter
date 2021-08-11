/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import firebase from 'firebase/app';
import Compare from './Compare';

function CompareList(props) {
  useFirestoreConnect([
    { collection: 'jobComparisons' },
  ]);

  const jobComparisons = useSelector(state => state.firestore.ordered.jobComparisons);

  if (isLoaded(jobComparisons)) {
    const filteredView = jobComparisons.filter(e => e.userId === firebase.auth().currentUser.uid);
    return (
      <>
        <div id='new-job' className='card keyword-card' onClick={() => props.createJobComparison()}>
          <h4>
            <span>
              <img
                id='new-job-img'
                src='https://media.giphy.com/media/sI4jSKNopYOVnXGhcM/giphy.gif'
                alt='add new job comparison'
              />
            </span>Add New Job Comparison</h4>
        </div>

        <div className='row'>
          {filteredView.map(jobComparison => (
            <Compare
              viewJobComparison={props.viewJobComparison}
              companyName={jobComparison.companyName}
              userId={jobComparison.userId}
              id={jobComparison.id}
              key={jobComparison.id}
            />
          ))}
        </div>
      </>

    );
  }
  return (
    <>
      <h3> Loading All Cover Letters and Job Postings...</h3>
    </>
  );
}

export default CompareList;
