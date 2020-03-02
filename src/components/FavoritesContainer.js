import React, { Component, Fragment } from "react"
import PropertyList from "./PropertyList"
import Pagination from "./Pagination.js"

class FavoritesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favoritesPage: [],
      currentPage: 0,
      totalPages: 0
    };
  }

  componentDidMount() {
    this.loadPage();
  }


  loadPage = (page = 1) => {
    let currentComponent = this;
    const favorites = Object.assign([], this.props.favorites);

    let favoritesPagination = [];
    while(favorites.length) {
      favoritesPagination.push(favorites.splice(0,10));
    }

    const newState = {
      favoritesPage: favoritesPagination[page-1],
      currentPage: page,
      totalPages: favoritesPagination.length
    };
      
    currentComponent.setState(newState);
  }

  render() {
    return (
      <Fragment>
        <PropertyList
          properties={ this.state.favoritesPage }
          addToFavorites={ this.props.addToFavorites } />

        <Pagination
          currentPage={ this.state.currentPage }
          totalPages={ this.state.totalPages }
          loadPage={ this.loadPage }
        />
      </Fragment>
    )
  }
}

export default FavoritesContainer;
