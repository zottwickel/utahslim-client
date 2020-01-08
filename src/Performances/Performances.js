import React from 'react'
import config from '../config'
import GigsContext from '../contexts/GigsContext'
import GigApiService from '../services/gigs-api-service'
import formatDate from '../services/format-date'
import './Performances.css'

class Performances extends React.Component {
  static contextType = GigsContext
  
  componentDidMount() {
    GigApiService.getGigs()
      .then(this.context.setGigs)
      .catch(this.context.setError)
  }

  render() {
    const gmapsUri = `https://www.google.com/maps/embed/v1/place?q=Mestizo%20Coffee%20House%2C%20631%20W%20North%20Temple%2C%20Salt%20Lake%20City%2C%20UT%2084116&key=${config.GMAPS_KEY}`
    const { gigs = [], error } = this.context
    return (
      <div className="Performances">
        <h2 className='content_heading'>Performances</h2>
        <div className='perform_flex'>
          <section className='perform_left'>
            {error 
              ? <p className='error'>There was an error, please try again.</p>
              : (
                <ul className='perform_list'>
                  {gigs.map(gig => {
                    const locationUrl = `https://www.google.com/maps/search/?api=1&query=${gig.location.split(' ').join('+')}`
                    return (
                      <li key={gig.id} className='perform_item'>
                        <h3 className='p_list_head'>{gig.gig_title}</h3>
                        <p className='p_list_content'>Date: {formatDate(gig.gig_date)}</p>
                        <p className='p_list_content'>Price: ${gig.price}</p>
                        <p className='p_list_content'>Location: <a rel='noopener noreferrer' target="_blank" className='outside_link' href={locationUrl}>{gig.location}</a></p>
                        <p className='p_list_content'>Description: {gig.description}</p>
                      </li>
                    )
                  })}
                </ul>
              )}
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