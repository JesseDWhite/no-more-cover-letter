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
  const filteredView = jobComparisons.filter(e => e.userId === firebase.auth().currentUser.uid);

  if (Object.keys(filteredView).length === 0) {
    return (
      <>
        <div id='new-job' className='card keyword-card' onClick={() => props.createJobComparison()}>
          <img
            id='new-job-img'
            src='https://media.giphy.com/media/sI4jSKNopYOVnXGhcM/giphy.gif'
            alt='add new job comparison'
          />
          <h4>Add New Job Comparison</h4>
        </div>
        <img
          id='pointer'
          src='https://media.giphy.com/media/8AjuQiq6219oFbwk41/giphy.gif'
          alt='arrow pointing up'
        />
        <h2 id='welcome-message'><em>It doesn't look like you have any submissions yet.
          Add one above and get started.</em></h2>
      </>
    );
  } else if (isLoaded(jobComparisons)) {
    return (
      <>
        <div id='new-job' className='card keyword-card' onClick={() => props.createJobComparison()}>
          <img
            id='new-job-img'
            src='https://media.giphy.com/media/sI4jSKNopYOVnXGhcM/giphy.gif'
            alt='add new job comparison'
          />
          <h4>Add New Job Comparison</h4>
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
      <button className='btn btn-warning' type='button' disabled>
        <span
          className='spinner-grow spinner-grow-sm'
          role='status'
          aria-hidden='true'
        />
        Loading...
      </button>
    </>
  );
}

export default CompareList;
