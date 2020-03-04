import React, { Component, Fragment } from "react"
import FavoriteProperties from "./FavoriteProperties.js"
import Pagination from "./Pagination.js"
import FavoritesContainer from "./FavoritesContainer.js"
import requestPage from "../util/apiConnection"
import "../css/pagination.css"

class FavoritePropertiesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: [],
      current_page: 0,
      total_pages: 0,
      favorites: [],
      showProperties: true
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
    const { properties } = Object.assign(this.state);
    const { favorites } = Object.assign(this.state);

    properties.forEach(function myFunction(property) {
      const [item, ...rest] = favorites.filter(item => item.id === property.id);

      const index = properties.indexOf(property);
      properties[index].favorite = item ? true : false;
    });

    const newState = { properties: properties };
    this.setState(newState);
  }

  addToFavorites = (property) => {
    let { favorites } = Object.assign(this.state);
    const favoriteFound = favorites.some(item => item.id === property.id);

    if (!favoriteFound) {
      favorites.push(property);
    } else {
      favorites = favorites.filter(item => item.id !== property.id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    const newState = { favorites: favorites };
    this.setState(newState);

    this.verifyFavorites();
  }

  changePageRender = () => {
    let { showProperties } = Object.assign(this.state);
    showProperties = !showProperties;

    const newState = { showProperties: showProperties };
    this.setState(newState);
  }

  changePageButton = (array, text) => {
    if(array.length <= 0) {
      return <Fragment />;
    }

    return <div className="pagination" title={ text }>
            <button className="button" onClick={ ()=> this.changePageRender() }>
              { text }
            </button>
          </div>;
  }

  

  render(){
    if(this.state.showProperties){
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

          { this.changePageButton(this.state.favorites, "Show Favorites") }
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <FavoritesContainer
            favorites={ this.state.favorites }
            addToFavorites={ this.addToFavorites } />

          { this.changePageButton(this.state.properties, "Show Properties") }
        </Fragment>
      );
    }
  }
}

export default FavoritePropertiesContainer;