import React, { Component } from "react"
import FavoriteProperties from "./FavoriteProperties.js"

const baseApiPath = "https://www.orulo.com.br/api/v2/buildings/";
const bearerToken = "<ADD BEARER TOKEN HERE>;

const request_promise = require('request-promise');
const requestParams = {
  uri: baseApiPath,
  headers: {
    "Authorization": "Bearer " + bearerToken,
    "Accept": "application/json"
  },
  json: true
};

class FavoritePropertiesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: [],
      page_atual: 0,
      total_pages: 0,
      favorites: []
    };

  }
  
  componentWillMount() {
    let currentComponent = this;

    request_promise(requestParams)
      .then(function (result) {
        const newState = {
          properties: result.buildings,
          page_atual: result.page,
          total_pages: result.total_pages,
        };
        currentComponent.setState(newState);

      })
      .catch(function (err) {
        console.log("Erro");
        console.log(err);
      });
  }

  render(){
    return (
      <FavoriteProperties 
        properties={ this.state.properties }
        page={ this.state.page_atual } />
    );
  }
}

export default FavoritePropertiesContainer;