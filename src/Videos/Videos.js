import React from 'react'
import './Videos.css'

/*
Boilerplate for embedding
          <div className='video_box'>
            <h4 className='v_text'></h4>
            <p className='v_text italics'></p>
            <iframe className='video' title='videoXX' src='https://www.youtube.com/embed/' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          </div>
*/
class Videos extends React.Component {
  render() {
    return (
      <div className="Videos">
        <h2 className='content_heading'>Videos</h2>
        <div className='video_flex'>
          <div className='video_box'>
            <h4 className='v_text'>Mestizo Coffee 2020</h4>
            <p className='v_text italics'>This Rock Must Roll - Utah Slim and the Desert Poets</p>
            <iframe className='video' title='video8' src="https://www.youtube.com/embed/vgO3C0KHflc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className='video_box'>
            <h4 className='v_text'>Diversion Social Eatery 2020</h4>
            <p className='v_text italics'>Higher Powder - Utah Slim and the Desert Poets</p>
            <iframe className='video' title='video7' src="https://www.youtube.com/embed/VTjTdlgpo3Q" frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          </div>
          <div className='video_box'>
            <h4 className='v_text'>Diversion Social Eatery 2020</h4>
            <p className='v_text italics'>Wheel of Water - Utah Slim and the Desert Poets</p>
            <iframe className='video' title='video6' src='https://www.youtube.com/embed/3zWxB0-WMtg' frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className='video_box'>
            <h4 className='v_text'>Mestizo Coffee 2020</h4>
            <p className='v_text italics'>Sea of Stone - Utah Slim and the Desert Poets</p>
            <iframe className='video' title='video5' src='https://www.youtube.com/embed/Eo35AbM5HVw' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          </div>
          <div className='video_box'>
            <h4 className='v_text'>The Cabin 2020</h4>
            <p className='v_text italics'>Higher Powder - Utah Slim and the Desert Poets</p>
            <iframe className='video' title='video4' src='https://www.youtube.com/embed/p5fxQClPm88' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          </div>
          <div className='video_box'>
            <h4 className='v_text'>The Cabin 2020</h4>
            <p className='v_text italics'>Bears Ears - Utah Slim and the Desert poets</p>
            <iframe className='video' title='video3' src='https://www.youtube.com/embed/8H0QkGWnrsc' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          </div>
          <div className='video_box'>
            <h4 className='v_text'>Summerfest 2018</h4>
            <p className='v_text italics'>Fisher Blues - Delta blues standard</p>
            <iframe className='video' title="video2" src="https://www.youtube.com/embed/CIr9k-0roo4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className='video_box'>
            <h4 className='v_text'>Rim Rock Patio - Torrey, UT 2019</h4>
            <p className='v_text italics'>Navajo Rug - Tom Russell / Ian Tyosn</p>
            <iframe className='video' title='video1' src="https://www.youtube.com/embed/1n9ClA7TkeU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className='video_box'>
            <h4 className='v_text'>KC Cofe Radio - Walnut Valley Festival NewSong 2018</h4>
            <p className='v_text italics'>Bear's Ears &amp; Devil's Weed - Utah Slim originals</p>
            <iframe className='video' title='video0' src="https://www.youtube.com/embed/UQh2jWCFohw?start=123" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default Videos