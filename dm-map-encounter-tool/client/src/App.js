import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/home';
import Collections from './pages/collections';
import Encounter from './pages/encounter';
import Login from './pages/login';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/collections">
            {/* {loggedIn ? <Redirect to="/login" /> : <Collections />} this is the going to redirect the user to the login in page if they are not logged in  */}
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
      <Footer />
    </>
  );
}

export default App;
