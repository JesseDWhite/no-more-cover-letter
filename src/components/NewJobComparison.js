/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFirestore } from 'react-redux-firebase';

function NewJobComparison(props) {
  const firestore = useFirestore();

  function addJobComparisonToFireStore(e) {
    e.preventDefault();

    const { coverLetter, jobPosting, companyName } = e.target;

    props.goBack();

    return firestore.collection('jobComparisons').add(
      {
        coverLetter: coverLetter.value,
        jobPosting: jobPosting.value,
        companyName: companyName.value,
      }
    );
  }

  return (
    <>
      <div className='card'>
        <form onSubmit={addJobComparisonToFireStore}>
          <div className='row'>
            <div className='col-8'>
              <label htmlFor='companyName'>Company Name</label>
              <input
                className='form-control'
                type='text'
                name='companyName'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <label htmlFor='coverLetter'>Your Cover Letter</label>
              <textarea
                className='form-control'
                type='text'
                name='coverLetter'
                rows='20'
              />
            </div>
            <div className='col-6'>
              <label htmlFor='jobPosting'>The Job Posting You Are Applying To</label>
              <textarea
                className='form-control'
                type='text'
                name='jobPosting'
                rows='20'
              />
            </div>
          </div>
          <button type='submit' className='btn btn-success'>Submit</button>
        </form>
        <button onClick={() => props.goBack()}>Go Back</button>
      </div>
    </>
  );
}

export default NewJobComparison;
