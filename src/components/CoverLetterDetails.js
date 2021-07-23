/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function CoverLetterDetails(props) {
  const { coverLetter } = props;
  return (
    <>
      <h1>Details Page</h1>

      <h2>{coverLetter.introParagraph}</h2>
      <h2>{coverLetter.yourName}</h2>
    </>
  );
}

CoverLetterDetails.propTypes = {
  coverLetter: PropTypes.object,
};

export default CoverLetterDetails;
