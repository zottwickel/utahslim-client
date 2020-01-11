import React from 'react'
import ReactDOM from 'react-dom'
import { Register, Login } from './UserForms'

describe('User Forms', () => {
  it('renders Login without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Login />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders Register without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Register />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})