import React from 'react'
import ReactDOM from 'react-dom'
import Videos from './Videos'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Videos />, div)
  ReactDOM.unmountComponentAtNode(div)
})