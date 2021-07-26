import React from 'react';

function JobComparisonDetails(props) {
  return (
    <>
      <h1>Details Page</h1>
      <button onClick={() => props.goBack()}> Go Back</button>
    </>
  );
}

export default JobComparisonDetails;
