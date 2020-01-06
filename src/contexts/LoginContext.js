import React, { Component } from 'react'

const LoginContext = React.createContext({
  isLoggedIn: false,
  login: false,
  register: false,
  error: null,
  setError: () => {},
  clearError: () => {},
  beginSession: () => {},
  endSession:() => {},
  toggleLogin: () => {},
  toggleRegister: () => {}
})

export default LoginContext

export class LoginProvider extends Component {
  state = {
    isLoggedIn: false,
    login: false,
    register: false,
    error: null,
  }

  setError = (error) => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  beginSession = () => {
    this.setState({ 
      isLoggedIn: !this.state.isLoggedIn,
      login: !this.state.login
     })
  }

  endSession = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }

  toggleLogin = (e) => {
    e.preventDefault()
    if (e.target === e.currentTarget) {
      this.setState({ login: !this.state.login })
    }
  }

  toggleRegister = (e) => {
    e.preventDefault()
    if (e.target === e.currentTarget) {
      this.setState({ register: !this.state.register })
    }
  }

  render() {
    const value = {
      isLoggedIn: this.state.isLoggedIn,
      login: this.state.login,
      register: this.state.register,
      error: this.state.error,
      beginSession: this.beginSession,
      endSession: this.endSession,
      toggleLogin: this.toggleLogin,
      toggleRegister: this.toggleRegister,
      setError: this.setError,
      clearError: this.clearError
    }

    return (
      <LoginContext.Provider value={value}>
        {this.props.children}
      </LoginContext.Provider>
    )
  }
}