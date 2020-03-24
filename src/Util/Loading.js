import React from 'react'
import './Loading.css'

export default function Loading() {
  return (
    <>
      <h4 className='section_heading'>Loading...</h4>
      <img className='loading' src={require('../images/Music-Preloader.gif')} alt='Loading...' />
    </>
  )
}