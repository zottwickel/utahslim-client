import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelopeOpen, faSms } from '@fortawesome/free-solid-svg-icons'
import './Contacts.css'

export function Phone() {
  return (
    <div className='phone_button'>
      <a href='tel:+18016495097'><FontAwesomeIcon className='contact_icon' icon={faPhone} /></a>
    </div>
  )
}

export function Mail() {
  return (
    <div className='mail_button'>
      <a href='mailto:utahslim11@gmail.com'><FontAwesomeIcon className='contact_icon' icon={faEnvelopeOpen} /></a>
    </div>
  )
}

export function Sms() {
  return (
    <div className='sms_button'>
      <a href='sms://+18016495097'><FontAwesomeIcon className='contact_icon' icon={faSms} /></a>
    </div>
  )
}