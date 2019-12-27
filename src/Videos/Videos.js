import React from 'react'
import './Videos.css'

class Videos extends React.Component {

  render() {
    return (
      <div className="Videos">
        <h2 className='content_heading'>Videos</h2>
        <div className='video_flex'>
          <iframe className='video' title="video1" src="https://www.youtube.com/embed/CIr9k-0roo4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    )
  }
}

export default Videos