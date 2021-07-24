/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFirestore } from 'react-redux-firebase';

function NewJobPostingForm(props) {
  const firestore = useFirestore();

  function addJobPostingToFirestore(e) {
    e.preventDefault();

    const { dutiesAndResponsiblities, requirementsAndQualifications, companyName } = e.target;

    props.goBack();

    return firestore.collection('jobPostings').add(
      {
        dutiesAndResponsiblities: dutiesAndResponsiblities.value,
        requirementsAndQualifications: requirementsAndQualifications.value,
        companyName: companyName.value,
      }
    );
  }
  return (
    <>
      <form onSubmit={addJobPostingToFirestore}>
        <label htmlFor='companyName'>Company Name</label>
        <input
          type='text'
          name='companyName'
        />
        <label htmlFor='dutiesAndResponsiblities'>Duties And Responsibilities</label>
        <textarea
          type='text'
          name='dutiesAndResponsiblities'
        />
        <label htmlFor='requirementsAndQualifications'>Requirements And Qualifications</label>
        <textarea
          type='text'
          name='requirementsAndQualifications'
        />
        <button type='submit'>Submit</button>
      </form>
      <button onClick={() => props.goBack()}>Go Back</button>
    </>
  );
}

export default NewJobPostingForm;
