import React, { Component } from 'react'

const BlogContext = React.createContext({
  articles: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setArticles: () => {},
})

export default BlogContext

export class BlogProvider extends Component {
  state = {
    articles: [],
    error: null,
  }

  setError = (error) => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setArticles = (articles) => {
    this.setState({ articles })
  }

  render() {
    const value = {
      articles: this.state.articles,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setArticles: this.setArticles
    }
    return (
      <BlogContext.Provider value={value}>
        {this.props.children}
      </BlogContext.Provider>
    )
  }
}