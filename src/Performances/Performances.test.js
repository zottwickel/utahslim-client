import React from 'react'
import ReactDOM from 'react-dom'
import Performances from './Performances'

it('renders Performances without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Performances />, div)
  ReactDOM.unmountComponentAtNode(div)
})