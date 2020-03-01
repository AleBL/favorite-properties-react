const baseApiPath = "https://www.orulo.com.br/api/v2/buildings/";
const bearerToken = "<ADD BEARER TOKEN HERE>";

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
