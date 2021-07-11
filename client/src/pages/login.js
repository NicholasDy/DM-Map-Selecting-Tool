import React from "react"
import { useAuthContext } from '../components/AuthContext';

function Login() {
  const { login } = useAuthContext()

  const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    // Gather the data from the form elements on the page
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        login(response);
      } else {
        alert('Failed to log in');
      }
    }
  };


  const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        login(response);
      } else {
        alert(response.statusText);
      }
    }
  };



  return (
    <div className="">
      <div className='loginsttr '>
        <div className=" p-2 m-3 border">
          <h2>Login</h2>
          <form className="form login-form">
            <div className="form-group inputgroups">
              <label className="textlogin" htmlFor="email-login">email:</label>
              <input className="form-input" type="text" id="email-login" />
            </div>
            <div className="form-group inputgroups">
              <label className="textlogin" htmlFor="password-login">password:</label>
              <input className="form-input" type="password" id="password-login" />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit" onClick={loginFormHandler}>login</button>
            </div>
          </form>
        </div>
        <div className=" p-2 m-3 border">
          <h2>Signup</h2>
          <form className="form signup-form">
            <div className="form-group inputgroups">
              <label className="textlogin" htmlFor="name-signup">name:</label>
              <input className="form-input" type="text" id="name-signup" />
            </div>
            <div className="form-group inputgroups">
              <label className="textlogin" htmlFor="email-signup">email:</label>
              <input className="form-input" type="text" id="email-signup" />
            </div>
            <div className="form-group inputgroups">
              <label className="textlogin" htmlFor="password-signup">password:</label>
              <input className="form-input" type="password" id="password-signup" />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit" onClick={signupFormHandler}>signup</button>
            </div>
          </form>
        </div>
      </div>


    </div>
  )
}
export default Login