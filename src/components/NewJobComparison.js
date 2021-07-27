/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFirestore } from 'react-redux-firebase';

function NewJobComparison(props) {
  const firestore = useFirestore();

  function addJobComparisonToFireStore(e) {
    e.preventDefault();

    const { coverLetter, jobPosting, companyName, totalScore, yourScore, yourPercentage } = e.target;

    props.goBack();

    return firestore.collection('jobComparisons').add(
      {
        coverLetter: coverLetter.value,
        jobPosting: jobPosting.value,
        companyName: companyName.value,
        totalScore: totalScore.value,
        yourScore: yourScore.value,
        yourPercentage: yourPercentage.value,
      }
    );
  }
  return (
    <>
      <form onSubmit={addJobComparisonToFireStore}>
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
        <input
          readOnly
          value={0}
          type='number'
          name='yourScore'
        />
        <input
          readOnly
          value={0}
          type='number'
          name='totalScore'
        />
        <input
          readOnly
          value={0}
          type='number'
          name='yourPercentage'
        />
        <button type='submit'>Submit</button>
      </form>
      <button onClick={() => props.goBack()}>Go Back</button>
    </>
  );
}

export default NewJobComparison;
