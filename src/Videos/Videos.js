import React from 'react'
import './Videos.css'

class Videos extends React.Component {

  render() {
    return (
      <div className="Videos">
        <h2 className='content_heading'>Videos</h2>
        <div className='video_flex'>
          <div className='video_box'>
            <h4 className='v_text'>Summerfest 2018</h4>
            <p className='v_text italics'>Fisher Blues - Delta blues standard</p>
            <iframe className='video' title="video1" src="https://www.youtube.com/embed/CIr9k-0roo4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className='video_box'>
            <h4 className='v_text'>IAMA Local Concert Series 2019</h4>
            <p className='v_text italics'>Wheel of Water - Utah Slim original</p>
            <iframe className='video' title="video2" src="https://www.youtube.com/embed/t7o9Oz51RVY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className='video_box'>
            <h4 className='v_text'>Rim Rock Patio - Torrey, UT 2019</h4>
            <p className='v_text italics'>Navajo Rug - Tom Russell / Ian Tyosn</p>
            <iframe className='video' title='video3' src="https://www.youtube.com/embed/1n9ClA7TkeU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className='video_box'>
            <h4 className='v_text'>Rim Rock Patio - Torrey, UT 2019</h4>
            <p className='v_text italics'>This Rock Must Roll - Utah Slim original</p>
            <iframe className='video' title='video4' src="https://www.youtube.com/embed/JQVuWdN9XZo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className='video_box'>
            <h4 className='v_text'>KC Cofe Radio - Walnut Valley Festival NewSong 2018</h4>
            <p className='v_text italics'>Bear's Ears &amp; Devil's Weed - Utah Slim originals</p>
            <iframe className='video' title='video5' src="https://www.youtube.com/embed/UQh2jWCFohw?start=123" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default Videos