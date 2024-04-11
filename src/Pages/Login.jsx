import React from 'react'
import './Css/Login.css'

const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder='Your Name' id="" />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='password' />

        </div>
        <button>Continue</button>
        <p className="login-login">Already have an account? <span>Login here</span></p>
        <div className="login-argee">
          <input type="checkbox" name="" id="" />
          <p>By continue , i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default Login
