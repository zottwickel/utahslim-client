import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

class Footer extends React.Component {
  
  render() {
    return (
      <footer className='footer'>
        <p className='footitem'>Website by Scott McKell</p>
        <a className='footitem' rel='noopener noreferrer' target="_blank" href="https://github.com/zottwickel"><FontAwesomeIcon className='icon port' icon={faGithub} /></a>
        <a className='footitem' rel='noopener noreferrer' target="_blank" href="https://www.linkedin.com/in/scott-mckell/"><FontAwesomeIcon className='icon port' icon={faLinkedin} /></a>
        <a className='footitem' rel='noopener noreferrer' target="_blank" href="https://zottwickel.github.io/portfolio/"><FontAwesomeIcon className='icon port' icon={faPalette} /></a>
      </footer>
    )
  }
}

export default Footer
