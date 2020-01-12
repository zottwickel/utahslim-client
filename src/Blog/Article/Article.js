import React from 'react'
import ArticleContext from '../../contexts/ArticleContext'
import ArticleApiService from '../../services/article-api-service'
import formatDate from '../../services/format-date'
import { Link } from 'react-router-dom'
import Loading from '../../Util/Loading'

class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: null,
      disabled: true,
    }
  }
  static contextType = ArticleContext
  

  callApi(article_id) {
    ArticleApiService.getArticle(article_id)
      .then(this.context.setArticle)
      .catch(this.context.setError)
    ArticleApiService.getArticleComments(article_id)
      .then(this.context.setComments)
      .catch(this.context.setError)
  }
  /*
  componentDidMount() {
    const { article_id } = this.props.match.params
    this.context.clearError()
    this.callApi(article_id)
  }

  componentWillUnmount() {
    this.context.clearArticle()
  }
  */

  handleComment(event) {
    event.preventDefault()
    const text = event.target.text.value
    const { article_id } = this.props.match.params

    ArticleApiService.postComment(article_id, text)
      .then(res => {
        this.callApi(article_id)
      })
      .catch(this.context.setError)
  }

  validateText(event) {
    const commentText = event.target.value
    if (commentText.length < 1 || commentText.length > 150) {
      this.setState({
        comment: 'Comment must be between 1 and 150 characters long.',
        disabled: true
      })
    } else {
      this.setState({
        comment: null,
        disabled: false
      })
    }
  }

  render() {
    const thisArticle = this.context.article
    const articleComments = this.context.comments
    return (
      <div className='article'>
        {!thisArticle ? <p>An article will go here.</p> : null }
        {this.props.isLoggedIn ? <Link className='a_compose_link' to='/blog/compose'>Compose new article</Link>: null }
        <h3 className='a_subheading'>{thisArticle.title}</h3>
        <div className='a_flex'>
          <div className='a_flex_left'>
            <p className='a_info'>Author: {thisArticle.user.full_name}</p>
            <p className='a_info'>Author's Username: {thisArticle.user.user_name}</p>
            <p className='a_content'>{thisArticle.content}</p>
            <p className='a_info'>Date: {formatDate(thisArticle.date_modified)}</p>
            <p className='a_info'>Author's email: {thisArticle.user.email}</p>
            <Link className='a_list_title' to='/blog'><span>Back to Articles List</span></Link>
          </div>
          <div className='a_flex_right'>
            <h4 className='c_subheading'>Comments</h4>
            <ul className='c_list'>
              {articleComments.map(comment => {
                return (
                  <li key={comment.comment_id} className='content_subheading c_item'>
                    <p className='c_content'>{comment.text}</p>
                    <p className='c_content'>By: {comment.user.user_name}</p>
                    <p className='c_content'>At: {formatDate(comment.date_created)}</p>
                  </li>
                )
              })}
            </ul>
            <form onSubmit={e => this.handleComment(e)}>
              <p className='c_content'>Your Comment:</p>
              <textarea className='c_text_field' name='text' id='text' placeholder={this.props.isLoggedIn ? 'Your comment here' : 'You must be logged in to comment'} onChange={e => this.validateText(e)} /><br />
              {this.state.comment ? <p className='c_invalid'>{this.state.comment}</p> : null }
              <input className='blog_button' disabled={!(this.props.isLoggedIn && !this.state.disabled)} type='submit' id='submit' value='Submit' />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Article