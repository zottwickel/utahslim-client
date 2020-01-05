import React from 'react'
import LoginContext from '../contexts/LoginContext'
import './UserForms.css'

export function Login(props) {
    return (
      <LoginContext.Consumer>
        {value => { return (
          <div className='overlay' onClick={e => value.toggleLogin(e)}>
            <form className='login_form' >
              <h2>Login</h2>
              <p className='user_label'>Email:</p>
              <input className='user_input' type='text' placeholder='yourname@domain.com' />
              <p className='user_label'>Password:</p>
              <input className='user_input' type='text' placeholser='Your Password' /><br />
              <button className='user_button'>Login</button>
              <button className='user_button' onClick={e => value.toggleLogin(e)}>Cancel</button>
              <p className='user_label'>Not a user? <button className='user_button' onClick={e => {value.toggleLogin(e); value.toggleRegister(e)}}>Sign Up!</button></p>
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
      {value => { return (
        <div className='overlay' onClick={e => value.toggleRegister(e)}>
          <form className='register_form'>
            <p className='user_label'>Full Name:</p>
            <input className='user_input' type='text' placeholder='Your Name' />
            <p className='user_label'>Screen Name:</p>
            <input className='user_input' type='text' placeholder='Your Screen Name' />
            <p className='user_label'>Email:</p>
            <input className='user_input' type='text' placeholder='yourname@domain.com' />
            <p className='user_label'>Password:</p>
            <input className='user_input' type='text' placeholder='Your Password' />
            <p className='user_label'>Confirm Password:</p>
            <input className='user_input' type='text' placeholser='Retype Password' /><br />
            <button className='user_button'>Submit</button>
            <button className='user_button' onClick={e => value.toggleRegister(e)}>Cancel</button><br />
            <span className='temp_note'>Note: users have not been set up yet. Please check in later for the final product!</span>
          </form>
        </div>
      )}}
    </LoginContext.Consumer>
  )
}