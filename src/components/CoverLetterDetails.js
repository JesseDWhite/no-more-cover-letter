import React from 'react';

function CoverLetterDetails(props) {
  const { coverLetter } = props;
  return (
    <h1>{coverLetter.companyName}</h1>
  );
}

export default CoverLetterDetails;
