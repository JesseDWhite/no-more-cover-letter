/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-useless-escape */
import React from 'react';
import { connect } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import NewJobComparison from './NewJobComparison';
import * as a from '../actions/index';
import * as c from '../actions/ActionTypes';
import CompareList from './CompareList';
import JobComparisonDetails from './JobComparisonDetails';

class CoverLetterControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedJobComparison: null,
      keywords: c.KEYWORDS,
      coverLetterKeyWords: [],
      jobPostingKeyWords: [],
      totalScore: 0,
      yourScore: 0,
    };
  }

  extractKeywords = (coverLetterWord, jobPostingWord) => {
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
      .filter(e => this.state.keywords.includes(e));
    const d = b.split(' ')
      .sort()
      .filter(e => this.state.keywords.includes(e));
    const finalCoverLetter = [...new Set(c)];
    const finalJobPosting = [...new Set(d)];
    console.log(`Final Cover Letter: ${finalCoverLetter}`);
    console.log(`Final Job Posting: ${finalJobPosting}`);
    this.setState({
      coverLetterKeyWords: finalCoverLetter,
      jobPostingKeyWords: finalJobPosting,
    });
  }

  getScore = () => {
    const newFinalScore = this.state.jobPostingKeyWords.length;
    const newYourScoreArray = this.state.coverLetterKeyWords.filter(e => this.state.jobPostingKeyWords.includes(e));
    const newYourScore = newYourScoreArray.length;
    console.log(`${newYourScore}/${newFinalScore}`);
    this.setState({
      finalScore: newFinalScore,
      yourScore: newYourScore,
    });
  }

  goBack = () => {
    if (this.props.formVisibleOnPage === c.CREATE_JOB_COMPARISON) {
      console.log(`first branch: ${this.props.formVisibleOnPage}`);
      const { dispatch } = this.props;
      const action = a.returnToMainPage();
      dispatch(action);
      this.setState({
        selectedJobComparison: null,
      });
    } else {
      console.log(`second branch: ${this.props.formVisibleOnPage}`);
      this.setState({
        selectedJobComparison: null,
      });
    }
  }

  createJobComparison = () => {
    const { dispatch } = this.props;
    const action = a.createJobComparison();
    dispatch(action);
  }

  deleteJobComparison = id => {
    this.props.firestore.delete({ collection: 'jobComparisons', doc: id });
    this.setState({
      selectedJobComparison: null,
    });
  }

  viewJobComparison = id => {
    this.props.firestore.get({ collection: 'jobComparisons', doc: id }).then(jobComparisons => {
      const firestoreJobComparison = {
        coverLetter: jobComparisons.get('coverLetter'),
        jobPosting: jobComparisons.get('jobPosting'),
        totalScore: jobComparisons.get('totalScore'),
        yourScore: jobComparisons.get('yourScore'),
        id: jobComparisons.id,
      };
      this.setState({ selectedJobComparison: firestoreJobComparison });
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
      if (this.props.formVisibleOnPage === c.CREATE_JOB_COMPARISON) {
        currentlyVisibleState = <NewJobComparison
          extractKeywords={this.extractKeywords}
          createJobComparison={this.createJobComparison}
          goBack={this.goBack}
        />;
      } else if (this.state.selectedJobComparison != null) {
        currentlyVisibleState = <JobComparisonDetails
          jobComparison={this.state.selectedJobComparison}
          deleteCoverLetter={this.deleteCoverLetter}
          goBack={this.goBack}
        />;
      } else {
        currentlyVisibleState = <CompareList
          createJobComparison={this.createJobComparison}
          viewJobComparison={this.viewJobComparison}
          extractKeywords={this.extractKeywords}
          coverLetterKeyWords={this.state.coverLetterKeyWords}
          jobPostingKeyWords={this.state.jobPostingKeyWords}
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
