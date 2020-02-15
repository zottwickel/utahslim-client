import TokenService from './token-service'
import config from '../config'

const GigsApiService = {
  getGigs() {
    return fetch(`${config.API_ENDPOINT}/gigs`, {
      headers: {
        
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postGig(description, gig_title, location, price, gig_date) {
    return fetch(`${config.API_ENDPOINT}/gigs`, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        description,
        gig_title,
        location,
        price,
        gig_date,
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  deleteGig(gig_id) {
    return fetch(`${config.API_ENDPOINT}/gigs/${gig_id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : null
      )
  }
}

export default GigsApiService