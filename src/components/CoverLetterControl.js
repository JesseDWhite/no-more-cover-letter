/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-useless-escape */
import React from 'react';
import { connect } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import NewJobComparison from './NewJobComparison';
import * as a from '../actions/index';
import * as c from '../actions/ActionTypes';
import CompareList from './CompareList';
import JobComparisonDetails from './JobComparisonDetails';
import EditJobComparison from './EditJobComparison';

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
      yourPercentage: 0,
    };
  }

  extractKeywords = (coverLetter, jobPosting) => {
    const removeNonLetterFromCoverLetter = coverLetter.replace(/[.,\/!$%\^&\*;:{}=\_`~()]/g, '')
      .replace(/\s+/g, ' ')
      .toLowerCase();
    const removeNonLetterFromJobPosting = jobPosting.replace(/[.,\/!$%\^&\*;:{}=\_`~()]/g, '')
      .replace(/\s+/g, ' ')
      .toLowerCase();
    const extractMatchingWordsCoverLetter = removeNonLetterFromCoverLetter.split(' ')
      .sort()
      .filter(e => this.state.keywords.includes(e));
    const extractMatchingWordsJobPosting = removeNonLetterFromJobPosting.split(' ')
      .sort()
      .filter(e => this.state.keywords.includes(e));
    const coverLetterKeyWordsNoDups = [...new Set(extractMatchingWordsCoverLetter)];
    const jobPostingKeyWordsNoDups = [...new Set(extractMatchingWordsJobPosting)];
    this.setState({
      coverLetterKeyWords: coverLetterKeyWordsNoDups,
      jobPostingKeyWords: jobPostingKeyWordsNoDups,
    });
  }

  getScore = () => {
    const newTotalScore = this.state.jobPostingKeyWords.length;
    const newYourScoreArray = this.state.coverLetterKeyWords.filter(e => this.state.jobPostingKeyWords.includes(e));
    const newYourScore = newYourScoreArray.length;
    const percentage = newYourScore / newTotalScore * 100;
    this.setState({
      totalScore: newTotalScore,
      yourScore: newYourScore,
      yourPercentage: percentage.toFixed(0),
    });
  }

  goBack = () => {
    if (this.props.formVisibleOnPage === c.CREATE_JOB_COMPARISON || this.props.formVisibleOnPage === c.EDIT_JOB_COMPARISON) {
      const { dispatch } = this.props;
      const action = a.returnToMainPage();
      dispatch(action);
      this.setState({
        selectedJobComparison: null,
        coverLetterKeyWords: [],
        jobPostingKeyWords: [],
        totalScore: 0,
        yourScore: 0,
        yourPercentage: 0,
      });
    } else {
      this.setState({
        selectedJobComparison: null,
        coverLetterKeyWords: [],
        jobPostingKeyWords: [],
        totalScore: 0,
        yourScore: 0,
        yourPercentage: 0,
      });
    }
  }

  createJobComparison = () => {
    const { dispatch } = this.props;
    const action = a.createJobComparison();
    dispatch(action);
  }

  editJobComparison = () => {
    const { dispatch } = this.props;
    const action = a.editJobComparison();
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
        companyName: jobComparisons.get('companyName'),
        totalScore: jobComparisons.get('totalScore'),
        yourScore: jobComparisons.get('yourScore'),
        id: jobComparisons.id,
      };
      this.setState({
        selectedJobComparison: firestoreJobComparison,
        jobPostingKeyWords: this.jobPostingKeyWords,
        coverLetterKeyWords: this.coverLetterKeyWords,
      });
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
        <div className='card job-compare-card'>
          <Link to='/signin'><h2>You must be signed in to see this content.</h2></Link>
        </div>
      );
    } if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      if (this.props.formVisibleOnPage === c.CREATE_JOB_COMPARISON) {
        currentlyVisibleState = <NewJobComparison
          createJobComparison={this.createJobComparison}
          goBack={this.goBack}
        />;
      } else if (this.props.formVisibleOnPage === c.EDIT_JOB_COMPARISON) {
        currentlyVisibleState = <EditJobComparison
          jobComparison={this.state.selectedJobComparison}
          editJobComparison={this.editJobComparison}
          goBack={this.goBack}
        />;
      } else if (this.state.selectedJobComparison != null) {
        currentlyVisibleState = <JobComparisonDetails
          coverLetter={this.state.selectedJobComparison}
          jobComparison={this.state.selectedJobComparison}
          editJobComparison={this.editJobComparison}
          deleteJobComparison={this.deleteJobComparison}
          coverLetterKeyWords={this.state.coverLetterKeyWords}
          jobPostingKeyWords={this.state.jobPostingKeyWords}
          yourScore={this.state.yourScore}
          totalScore={this.state.totalScore}
          yourPercentage={this.state.yourPercentage}
          extractKeywords={this.extractKeywords}
          getScore={this.getScore}
          goBack={this.goBack}
        />;
      } else {
        currentlyVisibleState = <CompareList
          createJobComparison={this.createJobComparison}
          viewJobComparison={this.viewJobComparison}
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
