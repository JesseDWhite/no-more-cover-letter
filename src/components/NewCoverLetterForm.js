/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFirestore } from 'react-redux-firebase';

function NewCoverLetterForm(props) {
  const firestore = useFirestore();

  function addCoverLetterToFirestore(e) {
    e.preventDefault();

    const { coverLetter, jobPosting } = e.target;

    props.goBack();

    return firestore.collection('testCase').add(
      {
        coverLetter: coverLetter.value,
        jobPosting: jobPosting.value,
      }
    );
  }
  return (
    <>
      <form onSubmit={addCoverLetterToFirestore}>
        <label htmlFor='coverLetter'>Your Cover Letter</label>
        <textarea
          type='text'
          name='coverLetter'
        />
        <label htmlFor='jobPosting'>Job Posting</label>
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

export default NewCoverLetterForm;
