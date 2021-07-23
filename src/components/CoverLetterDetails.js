/* eslint-disable react/forbid-prop-types */
import React from 'react';

function CoverLetterDetails(props) {
  // const { coverLetter } = props;
  return (
    <>
      <h1>Details Page</h1>
      <p>{props.coverLetter.introParagraph}</p>
      <p>{props.coverLetter.bodyParagraphOne}</p>
      <p>{props.coverLetter.bodyParagraphTwo}</p>
      <p>{props.coverLetter.conclusion}</p>
      <button onClick={() => props.goBack()}>Go Back</button>
    </>
  );
}

export default CoverLetterDetails;
