import React from 'react'
import ReactDOM from 'react-dom'
import Blog from './Blog'
import Compose from './Compose/Compose'
import Article from './Article/Article'
import { BrowserRouter } from 'react-router-dom'

it('renders Blog without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
  <BrowserRouter>
    <Blog />
  </BrowserRouter>,
   div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders Compose without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
  <BrowserRouter>
    <Compose />
  </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})