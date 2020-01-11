import React from 'react'
import ReactDOM from 'react-dom'
import Bio from './Bio'

it('renders Bio without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Bio />, div)
  ReactDOM.unmountComponentAtNode(div)
})