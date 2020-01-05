import React, { Component } from 'react'

const GigsContext = React.createContext({
  gigs: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setGigs: () => {},
})
export default GigsContext

export class GigsProvider extends Component {
  state = {
    gigs: [],
    error: null,
  };

  setError = (error) => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setGigs = (gigs) => {
    this.setState({ gigs })
  }

  render() {
    const value = {
      gigs: this.state.gigs,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setGigs: this.setGigs
    }
    return (
      <GigsContext.Provider value={value}>
        {this.props.children}
      </GigsContext.Provider>
    )
  }
}