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
      <div className='card job-compare-card'>
        <form onSubmit={handleEditJobComparisonFormSubmission}>
          <div className='row'>
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
              <h4>Company Name</h4>
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

export default EditJobComparison;
