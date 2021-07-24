/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFirestore } from 'react-redux-firebase';

function NewCoverLetterForm(props) {
  const firestore = useFirestore();

  function addCoverLetterToFirestore(e) {
    e.preventDefault();

    const { yourName,
      companyName,
      introParagraph,
      bodyParagraphOne,
      bodyParagraphTwo,
      conclusion } = e.target;

    props.goBack();

    return firestore.collection('coverLetters').add(
      {
        yourName: yourName.value,
        companyName: companyName.value,
        timeAdded: firestore.FieldValue.serverTimestamp(),
        introParagraph: introParagraph.value,
        bodyParagraphOne: bodyParagraphOne.value,
        bodyParagraphTwo: bodyParagraphTwo.value,
        conclusion: conclusion.value,
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
        <label htmlFor='companyName'>Company Name</label>
        <input
          type='text'
          name='companyName'
        />
        <label htmlFor='introParagraph'>Introductory Paragraph</label>
        <textarea
          type='text'
          name='introParagraph'
        />
        <label htmlFor='bodyParagraphOne'>First Body Paragraph</label>
        <textarea
          type='text'
          name='bodyParagraphOne'
        />
        <label htmlFor='bodyParagraphTwo'>Second Body Paragraph</label>
        <textarea
          type='text'
          name='bodyParagraphTwo'
        />
        <label htmlFor='conclusion'>Conclusion</label>
        <textarea
          type='text'
          name='conclusion'
        />
        <button type='submit'>Submit</button>
      </form>
      <button onClick={() => props.goBack()}>Go Back</button>
    </>
  );
}

export default NewCoverLetterForm;
