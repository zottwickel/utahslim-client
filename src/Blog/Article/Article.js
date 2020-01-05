import React from 'react'
import ArticleContext from '../../contexts/ArticleContext'
import ArticleApiService from '../../services/article-api-service'
import formatDate from '../../services/format-date'
import { Link } from 'react-router-dom'

class Article extends React.Component {
  static contextType = ArticleContext

  componentDidMount() {
    const { article_id } = this.props.match.params
    this.context.clearError()
    ArticleApiService.getArticle(article_id)
      .then(this.context.setArticle)
      .catch(this.context.setError)
    ArticleApiService.getArticleComments(article_id)
      .then(this.context.setComments)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearArticle()
  }

  render() {
    const thisArticle = this.context.article
    const articleComments = this.context.comments
    return (
      <div className='article'>
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
                  <li className='content_subheading c_item'>
                    <p className='c_content'>{comment.text}</p>
                    <p className='c_content'>By: {comment.user.user_name}</p>
                    <p className='c_content'>At: {formatDate(comment.date_created)}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Article