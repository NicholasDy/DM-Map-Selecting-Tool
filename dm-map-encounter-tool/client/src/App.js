import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/home';
import Collections from './pages/collections';
import Encounter from './pages/encounter';
import Login from './pages/login';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { AuthProvider, useAuthContext } from './components/AuthContext/index';

function App() {
  const { userId } = useContext(AuthContext)
  return (
    <AuthProvider>
      <Router>
        <Nav />
        {userId
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
          </Switch>)
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
    </AuthProvider>
  );
}

export default App;
