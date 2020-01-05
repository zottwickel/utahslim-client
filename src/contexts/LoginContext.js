import React, { Component } from 'react'

const LoginContext = React.createContext({
  isLoggedIn: false,
  login: false,
  register: false,
  beginSession: () => {},
  toggleLogin: () => {},
  toggleRegister: () => {}
})

export default LoginContext

export class LoginProvider extends Component {
  state = {
    isLoggedIn: false,
    login: false,
    register: false,
  }

  beginSession = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn })
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
      beginSession: this.beginSession,
      toggleLogin: this.toggleLogin,
      toggleRegister: this.toggleRegister,
    }

    return (
      <LoginContext.Provider value={value}>
        {this.props.children}
      </LoginContext.Provider>
    )
  }
}