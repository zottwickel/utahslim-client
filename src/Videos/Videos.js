import React from 'react'
import './Videos.css'

class Videos extends React.Component {

  render() {
    return (
      <div className="Videos">
        <h2 className='content_heading'>Videos</h2>
        <div className='video_flex'>
          <iframe className='video' title="video1" src="https://www.youtube.com/embed/CIr9k-0roo4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe className='video' title="video2" src="https://www.youtube.com/embed/t7o9Oz51RVY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe className='video' title='video3' src="https://www.youtube.com/embed/1n9ClA7TkeU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe className='video' title='video4' src="https://www.youtube.com/embed/JQVuWdN9XZo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe className='vidoe' title='video5' src="https://www.youtube.com/embed/UQh2jWCFohw?start=123" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}

export default Videos