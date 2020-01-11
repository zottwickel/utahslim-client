import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import Bio from './Bio/Bio'
import Videos from './Videos/Videos'
import Performances from './Performances/Performances'
import Blog from './Blog/Blog'
import { Login, Register } from './Users/UserForms'
import { Phone, Mail, Sms } from './Util/Contacts'
import LoginContext from './contexts/LoginContext'
import { GigsProvider } from './contexts/GigsContext'
import './App.css';

class App extends React.Component {
  static contextType = LoginContext
  
  componentDidMount() {
    this.context.setSession()
  }
  render() {
    return (
      <div className="App">
        {this.context.login ? <Login /> : null}
        {this.context.register ? <Register /> : null}      
        <Nav />
        <main className='content'>
          <GigsProvider>
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
          </GigsProvider>
          <Footer />
        </main>
        <Mail />
        <Phone />
        <Sms />
      </div>
    );
  }
}

export default App;
