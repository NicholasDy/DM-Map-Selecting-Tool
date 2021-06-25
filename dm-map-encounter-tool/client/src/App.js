import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/home';
import Collections from './pages/collections';
import Encounter from './pages/encounter';
import Login from './pages/login';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import Footer from './components/Footer';
// have to install the auth component that I went over with John

function App() {
  const { userId } = useContext(AuthContext)
  return (
    <>
      <Router>
        <Nav />
        { userId
        ? (<Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/collections">
            <Collections />
          </Route>
          <Route exact path="/encounter">
            <Encounter />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch> )
        : (<Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        )
}
      </Router>
      <Footer />
    </>
  );
}

export default App;
