import React from 'react'
import config from '../config'
import GigsContext from '../contexts/GigsContext'
import GigApiService from '../services/gigs-api-service'
import formatDate from '../services/format-date'
import Loading from '../Util/Loading'
import './Performances.css'

class Performances extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      description: null,
      title: null,
      location: null,
      disabled: true,
    }
    this.callGigs = () => {
      this.context.clearError()
      GigApiService.getGigs()
        .then(this.context.setGigs)
        .catch(this.context.setError)
    }
  }

  static contextType = GigsContext

  componentDidMount() {
    this.callGigs()
  }

  handleDeleteGig(e, gig_id) {
    e.preventDefault()
    GigApiService.deleteGig(gig_id)
      .then(res => {
        GigApiService.getGigs()
          .then(this.context.setGigs)
          .catch(this.context.setError)
      })
      .catch(this.context.setError)
  }

  handlePostGig(e) {
    e.preventDefault()
    e.persist()
    const title = e.target.title.value
    const description = e.target.description.value
    const location = e.target.location.value
    let date = e.target.date.value
    let price = e.target.price.value
    if (!date) {
      date = new Date()
    } else {
      date = new Date(date)
    }
    if (!price) {
      price = 0
    }
    GigApiService.postGig(description, title, location, price, date)
      .then(res => {
        e.target.title.value = ''
        e.target.description.value = ''
        e.target.location.value = ''
        e.target.date.value = ''
        e.target.price.value = ''
        this.callGigs()
      })
      .catch(err => console.error(err))
  }

  validateTitle(e) {
    if (e) { 
      e.preventDefault() 
      let valTitle = e.target.value
      if (valTitle.length < 5 || valTitle.length > 50) {
        this.setState({
          title: 'Please keep the title length between 5 and 50 characters.',
          disabled: true
        })
      } else {
        this.setState({
          title: undefined,
        })
      }
    }
    if (this.state.title === undefined && this.state.description === undefined && this.state.location === undefined) {
      this.setState({
        disabled: false
      })
    }
  }

  validateDescription(e) {
    e.preventDefault()
    let valDesc = e.target.value
    if (valDesc.length < 25 || valDesc.length > 250) {
      this.setState({
        description: 'Please keep the description length between 25 and 250 characters.',
        disabled: true
      })
    } else {
      this.setState({
        description: undefined,
      })
    }
    this.validateTitle()
  }

  validateLocation(e) {
    e.preventDefault()
    let valLoc = e.target.value
    if (valLoc.length < 10 || valLoc > 100) {
      this.setState({
        location: 'Please keep the location length between 10 and 100 characters.',
        disabled: true,
      })
    } else {
      this.setState({
        location: undefined,
      })
    }
    this.validateTitle()
  }

  render() {
    const gmapsUri = `https://www.google.com/maps/embed/v1/place?q=Mestizo%20Coffee%20House%2C%20631%20W%20North%20Temple%2C%20Salt%20Lake%20City%2C%20UT%2084116&key=${config.GMAPS_KEY}`
    const { gigs = [], error } = this.context
    console.log(config.SCOTT_ID)
    return (
      <div className="Performances">
        <h2 className='content_heading'>Performances</h2>
        <div className='perform_flex'>
          <section className='perform_left'>
            {gigs.length === 0 ? <Loading /> : null }
            {error 
              ? <p className='error'>There was an error, please try again.</p>
              : (
                <ul className='perform_list'>
                  {gigs.map(gig => {
                    const locationUrl = `https://www.google.com/maps/search/?api=1&query=${gig.location.split(' ').join('+')}`
                    return (
                      <li key={gig.gig_id} className='perform_item'>
                        <h3 className='p_list_head'>{gig.gig_title}</h3>
                        <p className='p_list_content'>Date: {formatDate(gig.gig_date)}</p>
                        <p className='p_list_content'>Price: ${gig.price}</p>
                        <p className='p_list_content'>Location: <a rel='noopener noreferrer' target="_blank" className='outside_link' href={locationUrl}>{gig.location}</a></p>
                        <p className='p_list_content'>Description: {gig.description}</p>
                        {(window.sessionStorage.getItem('user_id') === config.SCOTT_ID || window.sessionStorage.getItem('user_id') === config.REX_ID) ? <button className='delete_button' onClick={e => this.handleDeleteGig(e, gig.gig_id)}>Delete Gig</button> : null }
                      </li>
                    )
                  })}
                </ul>
              )}
            {(window.sessionStorage.getItem('user_id') === config.SCOTT_ID || window.sessionStorage.getItem('user_id') === config.REX_ID) ? <>
              <h2 className='content_heading'>Add a Gig</h2>
              <form onSubmit={e => this.handlePostGig(e)}>
                <p>Title:</p>
                <input className='gig_input' id='title' type='text' name='title' placeholder='Title' onChange={e => this.validateTitle(e)} />
                {this.state.title ? <p className='g_error'>{this.state.title}</p> : null}
                <p>Description:</p>
                <textarea className='gig_input desc' id='description' type='text' name='description' placeholder='Place a description of the gig here.' onChange={e => this.validateDescription(e)} />
                {this.state.description ? <p className='g_error'>{this.state.description}</p> : null}
                <p>Price:</p>
                <input className='gig_input' id='price' name='price' type='number' placeholder='0' step='0.01' min='0' max='9999.99' />
                <p>Location:</p>
                <input className='gig_input' id='location' type='text' name='location' placeholder='Location title and city' onChange={e => this.validateLocation(e)} /><br />
                {this.state.location ? <p className='g_error'>{this.state.location}</p> : null}
                <p>Gig Date/Time:</p>
                <input className='gig_input' type='datetime-local' id='date' name='date' /><br />
                <input className='gig_button' type='submit' value='Submit' disabled={this.state.disabled} />
              </form>
            </> : null}
          </section>
          <section className='perform_right'>
            <h3 className='content_subheading'>Mestizo Coffee Open Mic</h3>
            <iframe className='map' title='mestizos_map' width="280" height="280" frameBorder="0"
              src={gmapsUri} allowFullScreen></iframe>
            <p>Join us every wednesday night at Mestizo's coffee shop at 7PM for an open mic jam session! All are welcome, and it's FREE!</p>
          </section>
        </div>
      </div>
    )
  }
}

export default Performances