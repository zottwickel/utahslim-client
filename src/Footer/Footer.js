import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

class Footer extends React.Component {
  
  render() {
    return (
      <footer className='footer'>
        <p className='footitem'>Website by Sophia McKell</p>
      </footer>
    )
  }
}

export default Footer
