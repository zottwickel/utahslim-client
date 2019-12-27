import React from 'react'

function Logins(props = { isLoggedIn: false }) {
  if (!props.isLoggedIn) {
    return (
      <div className="user_logins">
        <button className='login_button' onClick={e => props.toggleLogin(e)}>Login</button>
        <button className='login_button' onClick={e => props.toggleRegister(e)}>Register</button>
      </div>
    )
  } else {
    return (
      <div className="user_logins">
        <button className='login_button'>Logout</button>
      </div>
    )
  }
}

export default Logins