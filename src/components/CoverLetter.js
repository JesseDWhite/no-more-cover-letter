import React from 'react';
import PropTypes from 'prop-types';

function CoverLetter(props) {
  return (
    <>
      <div>
        <p>{props.yourName}</p>
        <p>{props.companyName}</p>
      </div>
    </>
  );
}

CoverLetter.propTypes = {
  yourName: PropTypes.string,
  companyName: PropTypes.string,
};

export default CoverLetter;
