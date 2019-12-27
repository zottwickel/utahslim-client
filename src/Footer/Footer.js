import React from 'react'
import github from '../Images/GitHub-Mark-64px.png'
import linkedin from '../Images/linkedin_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

class Footer extends React.Component {
  
  render() {
    return (
      <footer className='footer'>
        <p className='footitem'>Website by Scott McKell</p>
        <a className='footitem' href="https://github.com/zottwickel"><img className='icon' src={github} alt='github logo' /></a>
        <a className='footitem' href="https://www.linkedin.com/in/scott-mckell/"><img className='icon' src={linkedin} alt='linkedin logo' /></a>
        <a className='footitem' href="https://zottwickel.github.io/portfolio/"><FontAwesomeIcon className='icon port' icon={faPalette} /></a>
      </footer>
    )
  }
}

export default Footer
