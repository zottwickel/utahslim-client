import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.component {
  static defaultProps = {
    isLoggedIn: false,
  }
  
  render() {
    return (
      <div className="nav">
        <nav>
          <Link to="/"><h1 className="nav_title">Utah Slim</h1></Link>
          <div className="user_handler">
            { if (!props.isLoggedIn) {
                return (
                  <Link to="/login"><span className="login_link">Login</span></Link>
                  <Link to="/register"><span className="register_link">Register<span></Link>
                )
              } else {
                return <Link to="/logout"><span className="login_link">Logout</span></Link>
              }}
          </div>
          <ul>
            <li><Link to="/"><span>Bio</span></Link></li>
            <li><Link to="/videos"><span>Videos</span></Link></li>
            <li><Link to="/performances"><span>Performances</span></Link></li>
            <li><Link to="/blog"><span>Blog</span></Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav
