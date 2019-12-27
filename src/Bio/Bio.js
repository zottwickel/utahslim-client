import React from 'react'
import './Bio.css'

class Bio extends React.Component {

  render() {
    return (
      <div className="bio">
        <h2 className='content_heading'>Biography</h2>
        <div className='bio_flex'>
          <section className='bio_flex_left'>
            <p>Now from Salt Lake City Utah, he spent several years on the shores of the Grand Staircase near Boulder, Utah. He worked years round at the Deer Creek Ranch, a rehab and college campus. The property was and still is not easily accessed and has no electrical power, no neighbors and a year round stream flowing through it. It's located just off the Bears Trail at the end of the road. The vistas, stones, and beauty of the red rocks are as wonderful as any on the Colorado Plateau.</p>
            <p>He came to know what others call wilderness as Home. Trails, gardenia and living in a lodge, day by day this became the inspiration for writing songs. His relationship with this land is intimate and magical.</p>
            <p>He was trained as a psychologist but after returning to the "wicked city" he bounced around from this and that for years. Finding himself with an illness and a lot of time on his hands, he applied himself to his all time goal of writing the songs that are in his heart. Inspired by his time with the land and it's people along the way, he had to improve his musicianship to help express his lyrics.</p>
            <p>The mission now is to perform music in harmony with his humanities, longing and experience. His dream is to invoke an image of a world that is undamaged, unpolluted and pure in the minds and hearts of his listeners to inspire them to love this rock we call home.</p>
          </section>
          <section className='bio_flex_right'>
            <h3 className='content_subheading'>IAMA Member</h3>
            <p>Utah Slim is a member and supporter of the Intermountain Acoustic Music Association. He contributes to and is always willing to lend a helping hand to his fellow members. <a className='outside_link' href='http://www.iamaweb.org/wp/'>Check out IAMA online!</a></p>
            <h3 className='content_subheading'>Awards</h3>
            <p>Songwriting competition #1</p>
            <p>Songwriting competition #2</p>
            <p>Songwriting competition #3</p>
            <h3 className='content_subheading'>Albums</h3>
            <p>Water Wheel</p>
            <p>Introducing Utah Slim</p>
          </section>
        </div>
      </div>
    )
  }
}

export default Bio