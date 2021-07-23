import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CoverLetterControl from './CoverLetterControl';
import Header from './Header';
import Signin from './Signin';
// import NewCoverLetterForm from './NewCoverLetterForm';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/'>
          <CoverLetterControl />
        </Route>
        {/* <Route path='/new-cover-letter'>
          <NewCoverLetterForm />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
