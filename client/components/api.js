import request from 'superagent'

const campsUrl = 'http://localhost:3000/api/v1/camps'

export function getCampList () {
  return request
    .get(campsUrl)
    .then(response => response.body)
}
