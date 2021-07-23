/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFirestore } from 'react-redux-firebase';

function NewCoverLetterForm(props) {
  const firestore = useFirestore();

  function addCoverLetterToFirestore(e) {
    e.preventDefault();

    const { yourName } = e.target;

    props.createCoverLetter();

    return firestore.collection('coverLetters').add(
      {
        yourName: yourName.value,
        timeAdded: firestore.FieldValue.serverTimestamp(),
      }
    );
  }
  return (
    <>
      <form onSubmit={addCoverLetterToFirestore}>
        <label htmlFor='yourName'>Your Name</label>
        <input
          type='text'
          name='yourName'
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default NewCoverLetterForm;
