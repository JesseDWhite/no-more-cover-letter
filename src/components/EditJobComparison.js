import React from 'react';

function EditJobComparison(props) {
  return (
    <>
      <h1>Edit Page</h1>
      <button onClick={() => props.goBack()}>Go Back</button>
    </>
  );
}

export default EditJobComparison;
