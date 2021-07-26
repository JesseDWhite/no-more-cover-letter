import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CoverLetterControl from './CoverLetterControl';
import Header from './Header';
import Signin from './Signin';

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
      </Switch>
    </Router>
  );
}

export default App;
