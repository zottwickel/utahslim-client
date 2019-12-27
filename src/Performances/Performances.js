import React from 'react'
import config from '../config'
import './Performances.css'

class Performances extends React.Component {
  render() {
    const gmapsUri = `https://www.google.com/maps/embed/v1/place?q=Mestizo%20Coffee%20House%2C%20631%20W%20North%20Temple%2C%20Salt%20Lake%20City%2C%20UT%2084116&key=${config.GMAPS_KEY}`
    return (
      <div className="Performances">
        <h2 className='content_heading'>Performances</h2>
        <div className='perform_flex'>
          <section className='perform_left'>
            <ul className='perform_list'>
              <li className='perform_item'>
                <h3 className='p_list_head'>Placeholder Event</h3>
                <p className='p_list_content'>Date: 12/34/2020</p>
                <p className='p_list_content'>Price: $XX.XX</p>
                <p className='p_list_content'>Location: <a href='https://www.google.com/maps/d/embed?mid=1A-jWKQKO0NhIdd_n9IkYp1-3634&ie=UTF8&hl=en&t=h&msa=0&ll=40.78210099999999%2C-111.93832399999997&spn=0.194972%2C0.675659&z=11&output=embed'>Salt Lake City</a></p>
                <p className='p_list_content'>Description: This is a placeholder event.</p>
              </li>
              <li className='perform_item'>
                <h3 className='p_list_head'>Placeholder Event</h3>
                <p className='p_list_content'>Date: 12/34/2020</p>
                <p className='p_list_content'>Price: $XX.XX</p>
                <p className='p_list_content'>Location: <a href='https://www.google.com/maps/d/embed?mid=1A-jWKQKO0NhIdd_n9IkYp1-3634&ie=UTF8&hl=en&t=h&msa=0&ll=40.78210099999999%2C-111.93832399999997&spn=0.194972%2C0.675659&z=11&output=embed'>Salt Lake City</a></p>
                <p className='p_list_content'>Description: This is a placeholder event.</p>
              </li>
              <li className='perform_item'>
                <h3 className='p_list_head'>Placeholder Event</h3>
                <p className='p_list_content'>Date: 12/34/2020</p>
                <p className='p_list_content'>Price: $XX.XX</p>
                <p className='p_list_content'>Location: <a href='https://www.google.com/maps/d/embed?mid=1A-jWKQKO0NhIdd_n9IkYp1-3634&ie=UTF8&hl=en&t=h&msa=0&ll=40.78210099999999%2C-111.93832399999997&spn=0.194972%2C0.675659&z=11&output=embed'>Salt Lake City</a></p>
                <p className='p_list_content'>Description: This is a placeholder event.</p>
              </li>
            </ul>
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