import React from 'react';
import PropTypes from 'prop-types';

function CoverLetterDetails(props) {
  const { coverLetter } = props;
  return (
    <>
      <h1>{coverLetter.companyName}</h1>
      <p>{coverLetter.companyName}</p>
      <p>To The Recruitment Team:</p>
      <p>{coverLetter.introParagraph}</p>
      <p>{coverLetter.bodyParagraphOne}</p>
      <p>{coverLetter.bodyParagraphTwo}</p>
      <p>{coverLetter.conclusion}</p>
      <p>Best,</p>
      <p>{coverLetter.yourName}</p>
      <button onClick={() => props.goBack()}>Go Back</button>
      <button onClick={() => props.deleteCoverLetter(coverLetter.id)}>Delete Cover Letter</button>
    </>
  );
}

CoverLetterDetails.propTypes = {
  introParagraph: PropTypes.string,
  bodyParagraphOne: PropTypes.string,
};

export default CoverLetterDetails;
