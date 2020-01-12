import React from 'react'
import ArticleApiService from '../../services/article-api-service'
import { Link, Redirect } from 'react-router-dom'
import '../Blog.css'


class Compose extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null,
      content: null,
      disabled: true,
      toArticles: false,
      error: null,
    }
  }

  handleCompose(event) {
    event.preventDefault()
    const { title, content } = event.target

    ArticleApiService.postArticle(
      title.value,
      content.value
    )
      .then(
        ArticleApiService.getArticles()
          .then(this.context.setArticles)
          .then(this.setState({ toArticles: true }))
          .catch(this.context.setError)
        
      )
      .catch(err => this.setState({ error: err }))
  }

  validateTitle(event) {
    event.preventDefault()
    const valTitle = event.target.value

    if (valTitle.length < 5 || valTitle > 30 ) {
      this.setState({
      title: 'Title must be between 5 and 30 characters.',
      disabled: true,
    })
    } else {
      this.setState({
        title: null,
        disabled: false })
    }
    this.validateContent(event)
  }

  validateContent(event) {
    event.preventDefault()
    const valContent = event.target.value

    if (valContent.length < 100 || valContent.length > 10000) {
      this.setState({ 
      content: 'Article content has to be at least 100 characters and no more than 10,000 characters long (yes ten thousand)',
      disabled: true
    })
    } else {
      this.setState({ 
        content: null, 
        disabled: false })
    }
  }

  render() {
    return (
      <div className='a_compose'>
      {this.state.toArticles ? <Redirect to='/blog' /> : null}
      <h3 className='a_subheading'>Compose Article</h3>
        <form className='compose_form' onSubmit={e => this.handleCompose(e)}>
          <p>Title:</p>
          <input className='compose_input' id='title' type='text' name='title' placeholder='Article Title' onChange={e => this.validateTitle(e)} />
          {this.state.title ? <p className='c_invalid'>{this.state.title}</p> : null }
          <p>Content:</p>
          <textarea className='compose_input a_textarea' id='content' name='content' onChange={e => this.validateContent(e)} placeholder={this.props.isLoggedIn ? 'Your article here' : 'How did you get here without being logged in? Please log in or register to post an article, don\'t be shy!'} /><br />
          {this.state.content ? <p className='c_invalid'>{this.state.content}</p> : null }
          {this.state.error ? <p className='c_invalid'>{this.state.error}</p> : null }
          <input className='blog_button' type='submit' value='Submit' disabled={!(this.props.isLoggedIn && !this.state.disabled)} />
        </form>
      <Link className='a_list_title' to='/blog'><span>Back to Articles List</span></Link>
      </div>
    )
  }
}

export default Compose