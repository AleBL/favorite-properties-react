import React, { Component, Fragment } from "react"
import FavoriteProperties from "./FavoriteProperties.js"
import Pagination from "./Pagination.js"
import requestPage from "../util/apiConnection"

class FavoritePropertiesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: [],
      current_page: 0,
      total_pages: 0,
      favorites: []
    };
  }
  
  componentWillMount() {
    this.loadPage();
  }

  loadPage = (page = 1) => {
    let currentComponent = this;

    requestPage(page)
    .then(function (result) {
      const newState = {
        properties: result.buildings,
        current_page: result.page,
        total_pages: result.total_pages
      };
      
      currentComponent.setState(newState);
    })
    .catch(function (err) {
      console.log("Erro");
      console.log(err);
    });

    let favorites = JSON.parse(localStorage.getItem('favorites'));

    if (Array.isArray(favorites)) {
      const newState = { favorites: favorites };
      currentComponent.setState(newState);
    }
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
      <Fragment>
        <FavoriteProperties 
          properties={ this.state.properties }
          addToFavorites={ this.addToFavorites } />

        <Pagination
          currentPage={ this.state.current_page }
          totalPages={ this.state.total_pages }
          loadPage={ this.loadPage }
        />
      </Fragment>
    );
  }
}

export default FavoritePropertiesContainer;