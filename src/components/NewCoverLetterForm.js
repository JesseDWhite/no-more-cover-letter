import React from 'react';
import { useFirestore } from 'react-redux-firebase';

function NewCoverLetterForm(props) {
  const firestore = useFirestore();

  function addCoverLetterToFirestore(e) {
    e.preventDefault();

    const { test } = e.target;

    props.createCoverLetter();

    return firestore.collection('cover-letters').add(
      {
        test: test.value,
        timeAdded: firestore.FieldValue.serverTimestamp(),
      }
    );
  }
  return (
    <>
      <form onSubmit={addCoverLetterToFirestore}>
        <input
          type='text'
          name='test'
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default NewCoverLetterForm;
