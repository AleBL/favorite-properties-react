import React, { Component } from "react";
import "./css/App.css";
import FavoritePropertiesContainer from "./components/FavoritePropertiesContainer.js"

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Favorite Properties</h1>
        <hr />

        <FavoritePropertiesContainer />
      </div>
    );
  }
}

export default App;
