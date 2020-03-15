import React from 'react'
import './Loading.css'

export default function Loading() {
  return (
    <img className='loading' src={require('../images/Music-Preloader.gif')} alt='Loading...' />
  )
}