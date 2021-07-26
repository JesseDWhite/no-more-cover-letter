/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFirestore } from 'react-redux-firebase';

function NewJobComparison(props) {
  const firestore = useFirestore();

  function addJobComparisonToFireStore(e) {
    e.preventDefault();

    const { coverLetter, jobPosting } = e.target;

    props.goBack();

    return firestore.collection('jobComparisons').add(
      {
        coverLetter: coverLetter.value,
        jobPosting: jobPosting.value,
        // totalScore: props.totalScore.value,
        // yourScore: props.yourScore.value,
      }
    );
  }
  return (
    <>
      <form onSubmit={addJobComparisonToFireStore}>
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
        <button type='submit'>Submit</button>
      </form>
      <button onClick={() => props.goBack()}>Go Back</button>
    </>
  );
}

export default NewJobComparison;
