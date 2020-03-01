import React, { Fragment } from "react"
import PropertyList from "./PropertyList"

const FavoriteProperties = (props) => {
  return (
    <Fragment>
      <PropertyList
        properties={ props.properties }
        addToFavorites={ props.addToFavorites } />
    </Fragment>
  );
}
  
export default FavoriteProperties;
