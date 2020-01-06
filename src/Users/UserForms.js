import React, { useState } from 'react'
import LoginContext from '../contexts/LoginContext'
import './UserForms.css'
import TokenService from '../services/token-service'
import AuthApiService from '../services/auth-api-service'

function handleLoginJwtAuth(event, context) {
  event.preventDefault()
  event.persist()
  const { email, password } = event.target

  context.clearError()
  AuthApiService.postLogin({
    email: email.value,
    password: password.value
  })
    .then(res => {
      TokenService.saveAuthToken(res.authToken)
      context.beginSession()
    })
    .catch(res => {
      context.setError(res.error)
    })
}

function handleRegister(event, context) {
  event.preventDefault()
  event.persist()
  const { full_name, user_name, email, password } = event.target

  context.clearError()
  AuthApiService.postUser({
    user_name: user_name.value,
    full_name: full_name.value,
    password: password.value,
    email: email.value
  })
    .then(user => {
      handleLoginJwtAuth(event, context)
    })
    .catch(res => {
      context.setError(res.error)
    })
}

export function Login(props) {
    return (
      <LoginContext.Consumer>
        {context => { return (
          <div className='overlay' >
            <form className='login_form' onSubmit={e => handleLoginJwtAuth(e, context)}>
              <h2>Login</h2>
              <p className='user_label'>Email:</p>
              <input className='user_input' name='email' id='email' type='text' placeholder='yourname@domain.com' />
              <p className='user_label'>Password:</p>
              <input className='user_input' name='password' id='password' type='password' placeholder='Your Password' /><br />
              {context.error ? <p className='invalid'>{context.error}</p> : null}
              <input className='user_button' type='submit' value='Login' />
              <button className='user_button' onClick={e => context.toggleLogin(e)}>Cancel</button>
              <p className='user_label'>Not a user? <button className='user_button' onClick={e => {context.toggleLogin(e); context.toggleRegister(e)}}>Sign Up!</button></p>
            </form>
          </div>
        )}}
      </LoginContext.Consumer>
    )
  
}

export function Register(props) {
  function validateUserName(e) {
    if (e.target.value.length > 50 || e.target.value.length < 1 ) {
      setUserName('Screen Name must be between 1 and 50 characters long')
    } else {
      setUserName(null)
    }
  }
  function validateFullName(e) {
    if (e.target.value.length > 50 || e.target.value.length < 1 ) {
      setFullName('Full Name must be between 1 and 50 characters long')
    } else {
      setFullName(null)
    }
  }
  function validateEmail(e) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailRegex.test(e.target.value)) {
      setEmail('Email must be valid')
    } else {
      setEmail(null)
    }
  }
  function validatePassword(e) {
    const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/
    const newPassword = e.target.value
    if (newPassword.length < 8) {
      setPassword('Password must be longer than 8 characters')
    } else if (newPassword.length > 72) {
      setPassword('Password must be less than 72 characters')
    } else if (newPassword.startsWith(' ') || newPassword.endsWith(' ')) {
      setPassword('Password must not start or end with empty spaces')
    } else if (!passwordRegex.test(newPassword)) {
      setPassword('Password must contain 1 upper case, lower case, number and special character')
    } else {
      setPassword(null)
      setPasswordValue(newPassword)
    }
  }
  function checkPasswordMatch(e) {
    const confirmPassword = e.target.value
    if (confirmPassword !== passwordValue) {
      setMatchPassword('Passwords must match')
    } else {
      setMatchPassword(null)
      setValidated(true)
    }
  }
  let [user_name, setUserName] = useState(null)
  let [full_name, setFullName] = useState(null)
  let [email, setEmail] = useState(null)
  let [password, setPassword] = useState(null)
  let [passwordValue, setPasswordValue] = useState(null)
  let [matchPassword, setMatchPassword] = useState(null)
  let [validated, setValidated] = useState(false)
  return (
    <LoginContext.Consumer>
      {context => { return (
        <div className='overlay' >
          <form className='register_form' onSubmit={e => handleRegister(e, context)}>
            <p className='user_label'>Full Name:</p>
            <input className='user_input' name='full_name' type='text' placeholder='Your Name' onChange={e => validateFullName(e)} />
            {full_name ? <p className='invalid'>{full_name}</p> : null }
            <p className='user_label'>Screen Name:</p>
            <input className='user_input' name='user_name' type='text' placeholder='Your Screen Name' onChange={e => validateUserName(e)} />
            {user_name ? <p className='invalid'>{user_name}</p> : null }
            <p className='user_label'>Email:</p>
            <input className='user_input' name='email' type='text' placeholder='yourname@domain.com' onChange={e => validateEmail(e)} />
            {email ? <p className='invalid'>{email}</p> : null }
            <p className='user_label'>Password:</p>
            <input className='user_input' name='password' type='password' placeholder='Your Password' onChange={e => validatePassword(e)} />
            {password ? <p className='invalid'>{password}</p> : null }
            <p className='user_label'>Confirm Password:</p>
            <input className='user_input' type='password' placeholder='Confirm Password' onChange={e => checkPasswordMatch(e)} /><br />
            {matchPassword ? <p className='invalid'>{matchPassword}</p> : null }
            <input className='user_button' type='submit' value='Submit' disabled={!validated} />
            <button className='user_button' onClick={e => context.toggleRegister(e)}>Cancel</button><br />
          </form>
        </div>
      )}}
    </LoginContext.Consumer>
  )
}