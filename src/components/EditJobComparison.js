/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFirestore } from 'react-redux-firebase';

function EditJobComparison(props) {
  const firestore = useFirestore();
  const { jobComparison } = props;

  function handleEditJobComparisonFormSubmission(e) {
    e.preventDefault();

    props.editJobComparison();

    const { companyName, coverLetter, jobPosting } = e.target;

    const propertiesToUpdate = {
      companyName: companyName.value,
      coverLetter: coverLetter.value,
      jobPosting: jobPosting.value,
      id: jobComparison.id,
    };

    return firestore.update({
      collection: 'jobComparisons',
      doc: jobComparison.id,
    }, propertiesToUpdate);
  }

  return (
    <>
      <form onSubmit={handleEditJobComparisonFormSubmission}>
        <div className='row'>
          <div className='col-12'>
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
            />
          </div>
          <div className='col-6'>
            <label htmlFor='jobPosting'>The Job Posting You Are Applying To</label>
            <textarea
              className='form-control'
              type='text'
              name='jobPosting'
            />
          </div>
        </div>
        <button type='submit'>Update Job Comparison</button>
      </form>
      <button onClick={() => props.goBack()}>Go Back</button>
      <button onClick={() => props.goBack()}>Go Back</button>
    </>
  );
}

export default EditJobComparison;
