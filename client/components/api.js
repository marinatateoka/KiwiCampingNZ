import request from 'superagent'

const campsUrl = '/api/v1/camps/'

export function getCampList () {
  return request
    .get(campsUrl)
    .then(response => response.body)
}
