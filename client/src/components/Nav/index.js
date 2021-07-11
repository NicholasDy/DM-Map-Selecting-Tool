import React from "react"
import draglogo from "../../images/dragonlogo.png"
import "./Nav.css";
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../AuthContext';

function Nav() {
  const { user, login, logout } = useAuthContext();

  // code for handling the log out 

  const handleLogOut = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      logout();
    } else {
      alert(response.statusText);
    }
  }


  return (
    <>
      <nav className="navbar">
        <div className="w-100">
          <div href="/" className="container-fluid d-flex topHeader w-100 p-3">
            <img src={draglogo} alt="Dragon Logo for DnD" className="d-inline-block align-text-top h1" width="50px" href="/" />
            <span className="title-App h1 d-flex align-items-center m-2 nav-brand strong">D&D Map Finder</span>
          </div>
          <div className="d-flex bg-secondary rounded overflow-hidden d-flex justify-content-around">
            <NavLink exact to="/" className="nav-link bg-secondary rounded text-white" activeClassName="active">
              Home
            </NavLink>
            {user &&
              <NavLink exact to="/encounter" className="nav-link bg-secondary rounded text-white" activeClassName="active">
                Encounter
              </NavLink>
            }
            {user &&
              <NavLink exact to="/upload" className="nav-link bg-secondary rounded text-white" activeClassName="active">
                Upload
              </NavLink>
            }
            {!user &&
              <NavLink exact to="/login" className="nav-link bg-secondary rounded text-white" activeClassName="active">
                Login
              </NavLink>
            }
            {/* usecontext to pass the state of user logged in to this so it renders onto the page */}
            {user &&
              <button onClick={handleLogOut} className="btn text-white">
                Logout
              </button>
            }
            {/* <div>
                            <form action="/action_page.php">
                                <input type="text" placeholder="Email" name="username" id="email-login" />
                                <input type="text" placeholder="Password" name="psw" id="password-login" />
                                <button type="submit" onClick={loginFormHandler}>Login</button>
                            </form>
                        </div> */}
          </div>
        </div>
      </nav>
    </>

  )
}



export default Nav