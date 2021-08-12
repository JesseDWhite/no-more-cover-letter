/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFirestore } from 'react-redux-firebase';
import firebase from 'firebase/app';

function NewJobComparison(props) {
  const firestore = useFirestore();

  function addJobComparisonToFireStore(e) {
    e.preventDefault();

    const { coverLetter, jobPosting, companyName, userId } = e.target;

    props.goBack();

    return firestore.collection('jobComparisons').add(
      {
        coverLetter: coverLetter.value,
        jobPosting: jobPosting.value,
        companyName: companyName.value,
        userId: userId.value,
      }
    );
  }

  return (
    <>
      <div className='card job-compare-card'>
        <form onSubmit={addJobComparisonToFireStore}>
          <div className='row'>
            <input
              type='text'
              name='userId'
              value={firebase.auth().currentUser.uid}
              hidden
              readOnly
            />
            <div className='col-12'>
              <h4>Company Name</h4>
              <input
                className='form-control'
                type='text'
                name='companyName'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <h4>Your Cover Letter</h4>
              <textarea
                className='form-control'
                type='text'
                name='coverLetter'
                rows='20'
              />
            </div>
            <div className='col-6'>
              <h4>Job Posting You Are Applying To</h4>
              <textarea
                className='form-control'
                type='text'
                name='jobPosting'
                rows='20'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <button className='btn btn-primary' onClick={() => props.goBack()}>Go Back</button>
            </div>
            <div className='col-6'>
              <button type='submit' className='btn btn-success'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewJobComparison;
