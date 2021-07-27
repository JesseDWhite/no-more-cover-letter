/* eslint-disable max-len */
import React from 'react';

function Compare(props) {
  return (
    <>
      <li><button onClick={() => props.deleteJobComparison(props.id)}>Delete {props.companyName}</button></li>
      <li><button onClick={() => props.viewJobComparison(props.id, props.coverLetter, props.jobPosting)}>View {props.companyName}</button></li>
    </>
  );
}

export default Compare;
