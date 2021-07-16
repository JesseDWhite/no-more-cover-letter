import React from 'react';
import { connect } from 'react-redux';
// import { withFirestore } from 'react-redux-firebase';
import { withFirestore } from 'react-redux-firebase';
import NewCoverLetterForm from './NewCoverLetterForm';
import * as a from '../actions/index';

class CoverLetterControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   selectedCoverLetter: null,
      //   editing: false,
    };
  }

  createCoverLetter = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  render() {
    let currentlyVisibleState = null;
    if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewCoverLetterForm
        createCoverLetter={this.createCoverLetter}
      />;
    }
    return (
      <>
        {currentlyVisibleState}
      </>
    );
  }
}

const mapStateToProps = state => ({
  formVisibleOnPage: state.formVisibleOnPage,
});

// eslint-disable-next-line no-class-assign
CoverLetterControl = connect(mapStateToProps)(CoverLetterControl);

export default withFirestore(CoverLetterControl);
