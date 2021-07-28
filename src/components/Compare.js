/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';

const JobCompareCard = styled.div`
  font-size: 24px;
  text-align: center;
`;

function Compare(props) {
  return (
    <>
      <div className='row main-list'>
        <JobCompareCard>
          <div
            className='card list-card'
            onClick={() => props.viewJobComparison(
              props.id,
              props.coverLetter,
              props.jobPosting)}
          >
            View {props.companyName}
          </div>
        </JobCompareCard>
      </div>
    </>
  );
}

export default Compare;
