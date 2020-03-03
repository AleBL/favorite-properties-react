import { baseApiPath, bearerToken } from '../util/constants'

const requestParams = {
  uri: baseApiPath,
  headers: {
    Authorization: "Bearer " + bearerToken,
    Accept: "application/json"
  },
  json: true
};

const request_promise = require('request-promise');

export default function requestPage(page = 1) {
  requestParams.qs =  { page: page };

  return request_promise(requestParams) ;
}
