import React from 'react'
import './Bio.css'

class Bio extends React.Component {

  render() {
    return (
      <div className="bio">
        <h2 className='content_heading'>Biography</h2>
        <div className='bio_flex'>
          <section className='bio_flex_left'>
            <img className='profile_photo' src={require('../images/rex-rocks.jpg')} alt='Singer/Songwriter Utah Slim' align='top' />
            <p className='b_content'>This music is strong, upbeat, and engaging. The lyrics get to the point with strong
        sentiments about what is going down today in our natural world. They sing about love
        and justice, too. People like what they hear. Their music is varied from acoustic
        rock to traditional folk. Their harmonies are beautiful and strong and their arrangements
        tight. Alisa, Joey, and Mandy have accomplished voices. Sophie's sax is a unique and
        exciting addition to their americana/folk sound. The hooks are catchy as in Higher Powder,
        a song about snowboarding. Their lyrics are subtle like in their song Pale Blue Dot. Many
        songs are emotionally engaging such as in Sister San Rafel. People listen to their beat
        and some dance along. These are four well-trained and experienced players! Please be sure
        to take a look at their bios for more information.</p>
            <p className='b_content'>Rex worked as a couselor, gardener, and trail guide for the Deer Creek Center out of Boulder, Utah in his early twenties. He came to know the "wild" places of the Escalante River System and Utah's Grand Staircase as home. It has taken him a while to come up with lyrics and music that express his experience with and connection to this land. Utah Slim and the Desert Poets are dedicated to celebrating the wonder of our natural world, to reaching heart, mind, wit and soul with lyric, melody, and harmony. Our mission is to lend our work to the world wide effort to value our planet as our home and to giving all future children a chance.</p>
            <p className='b_content'>Go ahead and reach out to Slim via his <a className='outside_link' href='mailto:utahslim11@gmail.com'>email</a>, or reach out via text at <a className='outside_link' href='tel:801-649-5097'>801-649-5097</a>. He would love to get in touch with you about how to best fill your musical needs.</p>
            <p className='b_content'>Please take a look at our ever-growing videos section. We are currently in the process of recording, editing, and uploading more videos for you to check us out and see what we can do.</p>
            {/* <h3 className='content_subheading'>Introducing the Desert Poets</h3>
            <h4 className='section_heading'>Scott McKell</h4>
            <img className='partnered_photo' src={require('../images/scott-profile.jpg')} alt='Scott McKell with a saxophone' />
            <p className='b_content'>Scott is a classically and jazzically trained saxophonist who sits in with Utah Slim on his performances. He adds lead lines and solos with his saxophone and sometimes other instruments. His passionate, exciting playing is smooth and playful, as well as sensitive. Scott also sings vocal harmonies and adds a touch of color with his voice.</p>
            <p className='b_content'>Utah Slim will bring Scott along to play with him to play in any situation you would like. With exprience playing in many situations, Scott is able to support Slim's imagery and energy by adding what Slim calls "curly cues" to originals and to familiar cover songs.</p> */}
            <h3 className='content_subheading'>Albums</h3>
            <h4 className='section_heading'>Intorducing Utah Slim</h4>
            <iframe title='introducingUtahSlim' width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/984369217&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <h4 className='section_heading'>Water Wheel</h4>
            <iframe title='waterWheel' width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/984352843&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><br /><p> </p>
          </section>
          <section className='bio_flex_right'>
          <h3 className='content_subheading'>Previous concerts</h3>
            <h4 className='b_heading'>Walnut Valley Festival</h4>
            <p className='b_info'>Winfield, KS for NewSong stage #2</p>
            <p className='b_info'><a className='outside_link' href='https://www.wvfest.com/'>www.wvfest.com</a></p>
            <h4 className='b_heading'>Summerfest</h4>
            <p className='b_info'>Logan, UT featuring Sycamore Slim</p>
            <p className='b_info'><a className='outside_link' href='http://www.logansummerfest.com/'>www.logansummerfest.com</a></p>
            <h4 className='b_heading'>Rim Rock Patio</h4>
            <p className='b_info'>Torrey, UT featuring Sycamore Slim (see video)</p>
            <p className='b_info'><a className='outside_link' href='http://therimrock.net/'>therimrock.net</a></p>
            <h4 className='b_heading'>Earthfest Star Parties</h4>
            <p className='b_info'>Kanab, UT</p>
            <p className='b_info'><a className='outside_link' href='https://amazingearthfest.org/'>amazingearthfest.org</a></p>
            <h4 className='b_heading'>Harvest Days</h4>
            <p className='b_info'>Capitol Reef National Park</p>
            <p className='b_info'><a className='outside_link' href='https://www.nps.gov/care/index.htm'>capitol reef website</a></p>
            <h4 className='b_heading'>IAMA Local Concert Series</h4>
            <p className='b_info'>Salt Lake City, UT (see video)</p>
            <p className='b_info'><a className='outside_link' href='https://www.iamaweb.org/'>www.iamaweb.org</a></p>
            <h4 className='b_heading'>Utah State Fair</h4>
            <p className='b_info'>Salt Lake City, UT featuring Sycamore Slim</p>
            <p className='b_info'><a className='outside_link' href='https://utahstatefair.com/welcome'>utahstatefair.com</a></p>
            <h4 className='b_heading'>Feldman's Deli</h4>
            <p className='b_info'>Salt Lake City, UT featuring Scott McKell</p>
            <p className='b_info'><a className='outside_link' href='http://www.feldmansdeli.com/home'>www.feldmansdeli.com</a></p>
            <h3 className='content_subheading'>Awards</h3>
            <p>Walnut Valley Festival 2011 NewSong for "Sister San Rafael"</p>
            <p>Walnut Valley Festival 2015 NewSong for "This Rock Must Roll"</p>
            <p>Walnut Valley Festival 2018 NewSong for "Bears Ears"</p>
          </section>
        </div>
      </div>
    )
  }
}

export default Bio