import React from 'react';
import PropTypes from 'prop-types';

function CoverLetter(props) {
  return (
    <>
      <div>
        <p>{props.yourName}</p>
        <p>{props.companyName}</p>
        <p>{props.timeAdded}</p>
      </div>
    </>
  );
}

CoverLetter.propTypes = {
  yourName: PropTypes.string,
  timeAdded: PropTypes.string,
};

export default CoverLetter;
