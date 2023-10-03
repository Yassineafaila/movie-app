import React from 'react'
import { Link } from 'react-router-dom'


function Signin() {
  return (
    <div className="container sign__in">
      <div className="form__container">
        <h4>Sign In</h4>
        <form>
          <div className='input__container'>
            <input
              type="email"
              placeholder="exemple@gamil.com"
              name="email"
              required
            />
            <input
              type="password"
              placeholder="password"
              min={8}
              name="password"
              required
            />
          </div>
          <div className='subAction__container'>
            <Link className="form-link">Forgot Password ?</Link>
          </div>
          <button type="submit">sign in</button>
        </form>
      </div>
      <div className="img__container">
        <img
          alt="background"
          src={require("../../assets/images/background-signin-up.jpg")}
        />
        <div className="img__content">
          <h4>Welcome Back</h4>
          <p>
            To Keep connected with us please login with your personelle info
          </p>
          <button>Sign Up</button>
        </div>
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default Signin