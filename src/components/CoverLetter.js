/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

function CoverLetter(props) {
  return (
    <>
      <div>
        <p>{props.yourName} - {props.companyName}</p>
        <button onClick={() => props.viewCoverLetter(props.id)}>View Cover Letter For {props.companyName}</button>
      </div>
    </>
  );
}

CoverLetter.propTypes = {
  viewCoverLetter: PropTypes.func,
  yourName: PropTypes.string,
  companyName: PropTypes.string,
};

export default CoverLetter;
