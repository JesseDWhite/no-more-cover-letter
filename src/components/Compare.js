/* eslint-disable max-len */
import React from 'react';

function Compare(props) {
  return (
    <>
      <button onClick={() => props.deleteJobComparison(props.id)}>Delete {props.companyName}</button>
      <button onClick={() => props.viewJobComparison(props.id, props.coverLetter, props.jobPosting)}>View {props.companyName}</button>
    </>
  );
}

export default Compare;
