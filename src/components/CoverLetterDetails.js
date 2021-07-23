import React from 'react';
import PropTypes from 'prop-types';

function CoverLetterDetails(props) {
  const { coverLetter } = props;
  return (
    <>
      <h1>{coverLetter.companyName}</h1>
      <p>{coverLetter.introParagraph}</p>
      <p>{coverLetter.bodyParagraphOne}</p>
      <p>{coverLetter.bodyParagraphTwo}</p>
      <p>{coverLetter.conclusion}</p>
      <button onClick={() => props.goBack()}>Go Back</button>
    </>
  );
}

CoverLetterDetails.propTypes = {
  introParagraph: PropTypes.string,
  bodyParagraphOne: PropTypes.string,
};

export default CoverLetterDetails;
