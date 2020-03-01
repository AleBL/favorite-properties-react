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
  
  componentDidMount() {
    this.loadPage();
  }

  loadPage = (page = 1) => {
    let currentComponent = this;
    let loadFavorites = this.loadFavorites;

    requestPage(page)
    .then(function (result) {
      const newState = {
        properties: result.buildings,
        current_page: result.page,
        total_pages: result.total_pages
      };
      
      currentComponent.setState(newState);

      loadFavorites();
    })
    .catch(function (err) {
      console.log("Erro");
      console.log(err);
    });
  }

  loadFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));

    if (Array.isArray(favorites)) {
      const newState = { favorites: favorites };
      this.setState(newState);
    }

    this.verifyFavorites();
  }

  verifyFavorites = () => {
    let { properties } = Object.assign(this.state);
    let { favorites } = Object.assign(this.state);

    properties.forEach(function myFunction(property) {
      const [item, ...rest] = favorites.filter(item => item.id === property.id);

      const index = properties.indexOf(property);
      properties[index].favorite = item ? true : false;
    });

    const newState = { properties: properties };
    this.setState(newState);
  }

  addToFavorites = (property) => {
    const { favorites } = Object.assign(this.state);
    const favoriteFound = favorites.some(item => item.id === property.id);

    if (!favoriteFound) {
      favorites.push(property);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    const newState = { favorites: favorites };
    this.setState(newState);

    this.verifyFavorites();
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