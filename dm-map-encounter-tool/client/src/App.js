import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/home';
import Collections from './pages/collections';
import Encounter from './pages/encounter';
import Login from './pages/login';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path="/collections">
          {/* {loggedIn ? <Redirect to="/login" /> : <Collections />} */}
          <Collections />
        </Route>
        <Route exact path="/encounter">
          <Encounter />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
