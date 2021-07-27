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
        <label htmlFor='companyName'>Company Name</label>
        <input
          type='text'
          name='companyName'
        />
        <label htmlFor='coverLetter'>Your Cover Letter</label>
        <textarea
          type='text'
          name='coverLetter'
        />
        <label htmlFor='jobPosting'>The Job Posting You Are Applying To</label>
        <textarea
          type='text'
          name='jobPosting'
        />
        <button type='submit'>Update Job Comparison</button>
      </form>
      <button onClick={() => props.goBack()}>Go Back</button>
      <button onClick={() => props.goBack()}>Go Back</button>
    </>
  );
}

export default EditJobComparison;
