import React from 'react';
import { connect } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import NewCoverLetterForm from './NewCoverLetterForm';
import * as a from '../actions/index';
import CoverLetterList from './CoverLetterList';
import CoverLetterDetails from './CoverLetterDetails';

class CoverLetterControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCoverLetter: null,
      //   editing: false,
    };
  }

  createCoverLetter = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  deleteCoverLetter = id => {
    this.props.firestore.delete({ collection: 'coverLetters', doc: id });
    this.setState({
      selectedCoverLetter: null,
    });
  }

  viewCoverLetter = id => {
    this.props.firestore.get({ collection: 'coverLetters', doc: id }).then(coverLetter => {
      const firestoreCoverLetter = {
        yourName: coverLetter.get('yourName'),
        companyName: coverLetter.get('companyName'),
        id: coverLetter.id,
      };
      this.setState({ selectedCoverLetter: firestoreCoverLetter });
    });
  }

  render() {
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <h1>Loading...</h1>
      );
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <h1>You must be signed in to see this content.</h1>
      );
    } if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewCoverLetterForm
          createCoverLetter={this.createCoverLetter}
        />;
      } else if (this.state.selectedCoverLetter != null) {
        currentlyVisibleState = <CoverLetterDetails
          deleteCoverLetter={this.deleteCoverLetter}
        />;
      } else {
        currentlyVisibleState = <CoverLetterList
          coverLetterList={this.props.masterCoverLetterList}
          createCoverLetter={this.createCoverLetter}
          viewCoverLetter={this.viewCoverLetter}
        />;
      }
      return (
        <>
          {currentlyVisibleState}
        </>
      );
    }
  }
}

const mapStateToProps = state => ({
  formVisibleOnPage: state.formVisibleOnPage,
});

// eslint-disable-next-line no-class-assign
CoverLetterControl = connect(mapStateToProps)(CoverLetterControl);

export default withFirestore(CoverLetterControl);
