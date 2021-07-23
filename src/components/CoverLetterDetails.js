import React from 'react';

function CoverLetterDetails(props) {
  const { coverLetter } = props;
  return (
    <>
      <h1>Details Page</h1>

      <h2>{coverLetter.companyName}</h2>
    </>
  );
}

export default CoverLetterDetails;
