import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav'
import Logins from './Logins'
import { BrowserRouter } from 'react-router-dom'

it('renders Nav without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
  <BrowserRouter>
    <Nav />
  </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders Logins without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Logins />, div)
  ReactDOM.unmountComponentAtNode(div)
})