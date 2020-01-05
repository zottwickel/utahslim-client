import React from 'react'
import LoginContext from '../contexts/LoginContext'

function Logins(props) {
  return (
    <LoginContext.Consumer>
      {value => { if (!value.isLoggedIn) {
        return (
          <div className="user_logins">
            <button className='login_button' onClick={e => value.toggleLogin(e)}>Login</button>
            <button className='login_button' onClick={e => value.toggleRegister(e)}>Register</button>
          </div>
        )
      } else {
        return (
          <div className="user_logins">
            <button className='login_button'>Logout</button>
          </div>
        )
      }}}
    </LoginContext.Consumer>
  )
}

export default Logins