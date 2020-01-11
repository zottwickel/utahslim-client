import React from 'react'
import ReactDOM from 'react-dom'
import Loading from './Loading'
import { Mail, Sms, Phone } from './Contacts'

it('renders Loading without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Loading />, div)
  ReactDOM.unmountComponentAtNode(div)
})

describe('Contacts buttons', () => {
  it('renders Mail without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Mail />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders Sms without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Sms />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders Phone without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Phone />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})