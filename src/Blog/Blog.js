import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ArticleList from './ArticleList/ArticleList'
import Article from './Article/Article'
import Compose from './Compose/Compose'
import './Blog.css'

class Blog extends React.Component {

  render() {
    return (
      <div className='blog'>
        <h2 className='content_heading'>Blog</h2>
        <Switch>
          <Route 
            exact path='/blog'
            component={ArticleList} 
          />
          <Route
            exact path='/blog/:article_id'
            component={Article}
          />
          <Route 
            exact path='/blog/compose'
            component={Compose}
          />
        </Switch>
      </div>
    )
  }
}

export default Blog