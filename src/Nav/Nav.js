import React from 'react'
import { Link } from 'react-router-dom'
import Logins from './Logins'
import './Nav.css'

class Nav extends React.Component {

  render() {
    return (
      <div className="nav">
        <nav>
          <Link className="nav_title" to={'/'}><h1>Utah Slim</h1></Link>
          <Logins isLoggedIn={this.props.isLoggedIn} toggleRegister={this.props.toggleRegister} toggleLogin={this.props.toggleLogin} />
          <ul className='navlink_list'>
            <li className='navlink'><Link to={'/'}><span>Bio</span></Link></li>
            <li className='navlink'><Link to={'/videos'}><span>Videos</span></Link></li>
            <li className='navlink'><Link to={'/performances'}><span>Performances</span></Link></li>
            <li className='navlink'><Link to={'/blog'}><span>Blog</span></Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav
