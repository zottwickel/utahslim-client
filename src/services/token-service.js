import config from '../config'

const TokenService = {
  saveAuthToken(token, user_id) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token)
    window.sessionStorage.setItem(config.USER_KEY, user_id)
  },
  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY)
    window.sessionStorage.removeItem(config.USER_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
}

export default TokenService