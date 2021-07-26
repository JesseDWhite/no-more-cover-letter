/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-useless-escape */
import React from 'react';
import { connect } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import NewCoverLetterForm from './NewCoverLetterForm';
import * as a from '../actions/index';
import * as c from '../actions/ActionTypes';
import CoverLetterDetails from './CoverLetterDetails';
import NewJobPostingForm from './NewJobPostingForm';
import CompareList from './CompareList';

class CoverLetterControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCoverLetter: null,
      languages: c.LANGUAGES,
      coverLetterArray: [],
      jobPostingArray: [],
      totalScore: 0,
      yourScore: 0,
    };
  }

  compareWord = (coverLetterWord, jobPostingWord) => {
    const a = coverLetterWord.replace(/[.,\/!$%\^&\*;:{}=\_`~()]/g, '')
      .replace(/\s+/g, ' ')
      .toLowerCase();
    console.log(a);
    const b = jobPostingWord.replace(/[.,\/!$%\^&\*;:{}=\_`~()]/g, '')
      .replace(/\s+/g, ' ')
      .toLowerCase();
    console.log(b);
    console.log(a.split(' '));
    console.log(b.split(' '));
    const c = a.split(' ')
      .sort()
      .filter(e => this.state.languages.includes(e));
    const d = b.split(' ')
      .sort()
      .filter(e => this.state.languages.includes(e));
    const finalCoverLetter = [...new Set(c)];
    const finalJobPosting = [...new Set(d)];
    console.log(`Final Cover Letter: ${finalCoverLetter}`);
    console.log(`Final Job Posting: ${finalJobPosting}`);
    this.setState({
      coverLetterArray: finalCoverLetter,
      jobPostingArray: finalJobPosting,
    });
  }

  getScore = () => {
    const newFinalScore = this.state.jobPostingArray.length;
    console.log(newFinalScore);
    this.setState({
      finalScore: newFinalScore,
    });
  }

  viewCompare = id => {
    this.props.firestore.get({ collection: 'testCase', doc: id }).then(compare => {
      const firestoreCoverLetter = {
        coverLetter: compare.get('coverLetter'),
        jobPosting: compare.get('jobPosting'),
        id: compare.id,
      };
      this.setState({ selectedCoverLetter: firestoreCoverLetter });
    });
  }

  goBack = () => {
    if (this.props.formVisibleOnPage === c.CREATE_COVER_LETTER || this.props.formVisibleOnPage === c.CREATE_JOB_POSTING) {
      console.log(`first branch: ${this.props.formVisibleOnPage}`);
      const { dispatch } = this.props;
      const action = a.returnToMainPage();
      dispatch(action);
      this.setState({
        selectedCoverLetter: null,
      });
    } else {
      console.log(`second branch: ${this.props.formVisibleOnPage}`);
      this.setState({
        selectedCoverLetter: null,
      });
    }
  }

  createCoverLetter = () => {
    const { dispatch } = this.props;
    const action = a.createCoverLetter();
    dispatch(action);
  }

  createJobPosting = () => {
    const { dispatch } = this.props;
    const action = a.createJobPosting();
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
        introParagraph: coverLetter.get('introParagraph'),
        bodyParagraphOne: coverLetter.get('bodyParagraphOne'),
        bodyParagraphTwo: coverLetter.get('bodyParagraphTwo'),
        conclusion: coverLetter.get('conclusion'),
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
      if (this.props.formVisibleOnPage === c.CREATE_COVER_LETTER) {
        currentlyVisibleState = <NewCoverLetterForm
          compareWord={this.compareWord}
          createCoverLetter={this.createCoverLetter}
          goBack={this.goBack}
        />;
      } else if (this.props.formVisibleOnPage === c.CREATE_JOB_POSTING) {
        currentlyVisibleState = <NewJobPostingForm
          createJobPosting={this.createJobPosting}
          goBack={this.goBack}
        />;
      } else if (this.state.selectedCoverLetter != null) {
        currentlyVisibleState = <CoverLetterDetails
          coverLetter={this.state.selectedCoverLetter}
          deleteCoverLetter={this.deleteCoverLetter}
          goBack={this.goBack}
        />;
      } else {
        currentlyVisibleState = <CompareList
          createJobPosting={this.createJobPosting}
          createCoverLetter={this.createCoverLetter}
          viewCoverLetter={this.viewCoverLetter}
          compareWord={this.compareWord}
          coverLetterArray={this.state.coverLetterArray}
          jobPostingArray={this.state.jobPostingArray}
          getScore={this.getScore}
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
