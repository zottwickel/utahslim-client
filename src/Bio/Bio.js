import React from 'react'
import './Bio.css'

class Bio extends React.Component {

  render() {
    return (
      <div className="bio">
        <h2 className='content_heading'>Biography</h2>
        <div className='bio_flex'>
          <section className='bio_flex_left'>
            <h4 className='section_heading'>About Utah Slim</h4>
            <img className='profile_photo' src={require('../images/rex-rocks.jpg')} alt='Singer/Songwriter Utah Slim' align='top' />
            <p className='b_content'>Rex Seaburry AKA Utah Slim is a singer songwriter hailing from Salt Lake City, Utah. He is a great guitarist, storyteller, and singer who sings songs about the American four-corners desert. His fingerpicking style is both uniqe and delightful. The images that come up when he plays are evocative of the great deserts in which he has traveled and lived.</p>
            <p className='b_content'>Utah Slim is currently available to enthrall audiences both big and small in any venue that you need him. Utah Slim is now playing with a ragtag team called The Desert Poets. The Desert Poets inlcude artists from far and wide who each add their own uniqe element to the group. While Slim can handle a set on his own, we are now currently working as a group.</p>
            <p className='b_content'>Go ahead and reach out to Slim via his <a className='outside_link' href='mailto:utahslim11@gmail.com'>email</a>, or reach out via text/call at <a className='outside_link' href='tel:801-649-5097'>801-649-5097</a>. He would love to get in touch with you about how to best fill your musical needs.</p>
            <p className='b_content'>Please take a look at our ever-growing videos section. We are currently in the process of recording, editing, and uploading more videos for you to check us out and see what we can do.</p>
            <h3 className='content_subheading'>Introducing the Desert Poets</h3>
            <h4 className='section_heading'>Scott McKell</h4>
            <img className='partnered_photo' src={require('../images/scott-profile.jpg')} alt='Scott McKell with a saxophone' />
            <p className='b_content'>Scott is a classically and jazzically trained saxophonist who sits in with Utah Slim on his performances. He adds lead lines and solos with his saxophone and sometimes other instruments. His passionate, exciting playing is smooth and playful, as well as sensitive. Scott also sings vocal harmonies and adds a touch of color with his voice.</p>
            <p className='b_content'>Utah Slim will bring Scott along to play with him to play in any situation you would like. With exprience playing in many situations, Scott is able to support Slim's imagery and energy by adding what Slim calls "curly cues" to originals and to familiar cover songs.</p>
            <h4>More Desert Poets profiles coming soon!</h4>
          </section>
          <section className='bio_flex_right'>
            <h3 className='content_subheading'>Previous concerts</h3>
            <h4 className='b_heading'>Walnut Valley Festival</h4>
            <p className='b_info'>Winfield, KS for NewSong stage #2</p>
            <h4 className='b_heading'>Summerfest</h4>
            <p className='b_info'>Logan, UT featuring Sycamore Slim</p>
            <h4 className='b_heading'>Rim Rock Patio</h4>
            <p className='b_info'>Torrey, UT featuring Sycamore Slim (see video)</p>
            <h4 className='b_heading'>Earthfest Star Parties</h4>
            <p className='b_info'>Kanab, UT</p>
            <h4 className='b_heading'>Harvest Days</h4>
            <p className='b_info'>Capitol Reef National Park</p>
            <h4 className='b_heading'>IAMA Local Concert Series</h4>
            <p className='b_info'>Salt Lake City, UT (see video)</p>
            <h4 className='b_heading'>Utah State Fair</h4>
            <p className='b_info'>Salt Lake City, UT featuring Sycamore Slim</p>
            <h4 className='b_heading'>Feldman's Deli</h4>
            <p className='b_info'>Salt Lake City, UT featuring Scott McKell</p>
            <h3 className='content_subheading'>Awards</h3>
            <p>Walnut Valley Festival 2011 NewSong for "Sister San Rafael"</p>
            <p>Walnut Valley Festival 2015 NewSong for "This Rock Must Roll"</p>
            <p>Walnut Valley Festival 2018 NewSong for "Bears Ears"</p>
            <h3 className='content_subheading'>Albums</h3>
            <p className='italics'>Water Wheel</p>
            <p className='italics'>Introducing Utah Slim</p>
          </section>
        </div>
      </div>
    )
  }
}

export default Bio