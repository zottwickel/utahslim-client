import TokenService from './token-service'
import config from '../config'

const ArticleApiService = {
  getArticles() {
    return fetch(`${config.API_ENDPOINT}/articles`, {
      headers: {},
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getArticle(article_id) {
    return fetch(`${config.API_ENDPOINT}/articles/${article_id}`, {
      headers: {},
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getArticleComments(article_id) {
    return fetch(`${config.API_ENDPOINT}/articles/${article_id}/comments`, {
      headers: {},
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postArticle(title, content) {
    return fetch(`${config.API_ENDPOINT}/articles`, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        content: content,
      })
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postComment(article_id, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        article_id: article_id,
        text: text,
      })
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  deleteComment(comment_id) {
    return fetch(`${config.API_ENDPOINT}/comments/${comment_id}`, {
      method: 'DELETE',
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : null
      )
  },
}

export default ArticleApiService