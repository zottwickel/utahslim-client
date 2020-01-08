import React from 'react'
import BlogContext from '../../contexts/BlogContext'
import ArticleApiService from '../../services/article-api-service'
import formatDate from '../../services/format-date'
import { Link } from 'react-router-dom'

class ArticleList extends React.Component {
  static contextType = BlogContext

  componentDidMount() {
    ArticleApiService.getArticles()
      .then(this.context.setArticles)
      .catch(this.context.setError)
  }

  componentDidUpdate() {
    ArticleApiService.getArticles()
      .then(this.context.setArticles)
      .catch(this.context.setError)
  }

  render() {
    return (
      <div className='article_list'>
        {this.props.isLoggedIn ? <Link className='a_compose_link' to='/blog/compose'>Compose new article</Link>: null }
        <ul className='articles_list'>
          {this.context.articles.map(article => {
            const articlePath = `/blog/${article.article_id}`
            return (
              <li className='article_item' key={article.article_id} >
                <Link className='a_list_title' to={articlePath}><h3 className='content_subheading'>{article.title}</h3></Link>
                <p className='a_list_content'>Author: {article.user.full_name}</p>
                <p className='a_list_content'>Updated: {formatDate(article.date_modified)}</p>
                <p className='a_list_content'>Comments: {article.number_of_comments}</p>
                <p className='a_list_content'>{article.content.substring(0, 15) + '...'}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default ArticleList