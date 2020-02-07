import React from 'react'
import LoginContext from '../contexts/LoginContext'
import TokenService from '../services/token-service'

function Logins(props) {
  function handleLogout(event, context) {
    event.preventDefault()
    TokenService.clearAuthToken()
    context.endSession()
  }
  return (
    <LoginContext.Consumer>
      {value => { if (!value.isLoggedIn) {
        return (
          <div className="user_logins">
            <button className='login_button' onClick={e => value.toggleLogin(e)}>Login</button>
            <button className='login_button' onClick={e => value.toggleRegister(e)}>Register</button>
            <p className='n_message'>Log in or register to comment on or write blog articles.</p>
          </div>
        )
      } else {
        return (
          <div className="user_logins">
            <button className='login_button' onClick={e => handleLogout(e, value)}>Logout</button>
          </div>
        )
      }}}
    </LoginContext.Consumer>
  )
}

export default Logins