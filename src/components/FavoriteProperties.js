import React, { Fragment } from "react"
import PropertieList from "./PropertieList"

const FavoriteProperties = (props) => {
  return (
    <Fragment>
      <PropertieList
        properties={ props.properties }
        addToFavorites={ props.addToFavorites } />

      <b>{ props.page }</b>
    </Fragment>
  );
}
  
export default FavoriteProperties;
