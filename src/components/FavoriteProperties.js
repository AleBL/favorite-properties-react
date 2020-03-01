import React, { Fragment } from "react"
import PropertieList from "./PropertieList"

const FavoriteProperties = (props) => {
  return (
    <Fragment>
      <PropertieList
        properties={ props.properties }
        addToFavorites={ props.addToFavorites } />
    </Fragment>
  );
}
  
export default FavoriteProperties;
