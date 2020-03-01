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

  addToFavorites = (propertie) => {
    const { favorites } = Object.assign(this.state);
    const favoriteFound = favorites.some(item => item.id === propertie.id);

    if (!favoriteFound) {
      favorites.push(propertie);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    const newState = { favorites: favorites };
    this.setState(newState);
  }

  render(){
    return (
      <FavoriteProperties 
        properties={ this.state.properties }
        addToFavorites={ this.addToFavorites } />
    );
  }
}

export default FavoritePropertiesContainer;