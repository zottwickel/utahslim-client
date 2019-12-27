import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import Bio from './Bio/Bio'
import Videos from './Videos/Videos'
import Performances from './Performances/Performances'
import Blog from './Blog/Blog'
import { Login, Register } from './Users/UserForms'
import { Phone, Mail } from './Util/Contacts'
import './App.css';

class App extends React.Component {
  state = {
    login: false,
    register: false,
    isLoggedIn: false,
  }

  toggleLogin = (event) => {
    event.preventDefault()
    this.setState({
      login: !this.state.login
    })
  }

  toggleRegister = (event) => {
    event.preventDefault()
    this.setState({
      register: !this.state.register
    })
  }
  
  render() {
    return (
      <div className="App">
        {this.state.login ? <Login toggleLogin={this.toggleLogin} toggleRegister={this.toggleRegister} /> : null}
        {this.state.register ? <Register toggleRegister={this.toggleRegister} /> : null}      
        <Nav isLoggedIn={this.state.isLoggedIn} toggleRegister={this.toggleRegister} toggleLogin={this.toggleLogin} />
        <main className='content'>
          <Switch>
            <Route 
              exact path='/bio'
              render={(props) => {
                return <Bio {...props} />
              }}
            />
            <Route
              exact path='/'
              render={(props) => {
                return <Bio {...props} />
              }}
            />
            <Route
              exact path='/videos'
              render={(props) => {
                return <Videos {...props} />
              }}
            />
            <Route
              exact path='/performances'
              render={(props) => {
                return <Performances {...props} />
              }}
            />
            <Route
              path='/blog'
              render={(props) => {
                return <Blog {...props} />
              }}
            />
          </Switch>
          <Footer />
        </main>
        <Mail />
        <Phone />
      </div>
    );
  }
}

export default App;
