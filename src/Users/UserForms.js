import React from 'react'
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
  event.persist()
  event.preventDefault()
  const { full_name, user_name, email, password } = event.target

  context.clearError()
  AuthApiService.postUser({
    user_name: user_name.value,
    full_name: full_name.value,
    password: password.value,
    email: email.value
  })
    .then(user => {
      full_name.value = ''
      user_name.value = ''
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
              <input className='user_button' type='submit' value='login' />
              <button className='user_button' onClick={e => context.toggleLogin(e)}>Cancel</button>
              <p className='user_label'>Not a user? <button className='user_button' onClick={e => {context.toggleLogin(e); context.toggleRegister(e)}}>Sign Up!</button></p>
              <span className='temp_note'>Note: users have not been set up yet. Please check in later for the final product!</span>
            </form>
          </div>
        )}}
      </LoginContext.Consumer>
    )
  
}

export function Register(props) {
  return (
    <LoginContext.Consumer>
      {context => { return (
        <div className='overlay' onClick={e => context.toggleRegister(e)}>
          <form className='register_form'>
            <p className='user_label'>Full Name:</p>
            <input className='user_input' name='full_name' type='text' placeholder='Your Name' />
            <p className='user_label'>Screen Name:</p>
            <input className='user_input' name='user_name' type='text' placeholder='Your Screen Name' />
            <p className='user_label'>Email:</p>
            <input className='user_input' name='email' type='text' placeholder='yourname@domain.com' />
            <p className='user_label'>Password:</p>
            <input className='user_input' name='password' type='password' placeholder='Your Password' />
            <p className='user_label'>Confirm Password:</p>
            <input className='user_input' type='password' placeholser='Retype Password' /><br />
            <button className='user_button' type='submit' onClick={e => handleRegister(e, context)}>Submit</button>
            <button className='user_button' onClick={e => context.toggleRegister(e)}>Cancel</button><br />
            <span className='temp_note'>Note: users have not been set up yet. Please check in later for the final product!</span>
          </form>
        </div>
      )}}
    </LoginContext.Consumer>
  )
}