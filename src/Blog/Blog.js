import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ArticleList from './ArticleList/ArticleList'
import Article from './Article/Article'
import Compose from './Compose/Compose'
import LoginContext from '../contexts/LoginContext'
import './Blog.css'

class Blog extends React.Component {
  static contextType = LoginContext

  render() {
    return (
      <div className='blog'>
        <h2 className='content_heading'>Blog</h2>
        <Switch>
          {/*
          <Route 
            exact path='/blog/compose'
            render={(props) => <Compose {...props} isLoggedIn={this.context.isLoggedIn} />}
          />
          */}
          <Route 
            exact path='/blog'
            render={(props) => <ArticleList {...props} isLoggedIn={this.context.isLoggedIn} />}
          />
          {/*
          <Route
            exact path='/blog/:article_id'
            render={(props) => <Article {...props} isLoggedIn={this.context.isLoggedIn} />}
          />
          */}
        </Switch>
      </div>
    )
  }
}

export default Blog