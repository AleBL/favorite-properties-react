import React, { Component, Fragment } from "react"
import Property from "./Property"

class PropertieList extends Component {
  render() {
    return (
      <Fragment>
        {
          this.props.properties.map(property => (
            <Property 
              key={ property.id }
              property={ property }
              addToFavorites={ this.props.addToFavorites } />

          ))
        }
      </Fragment>
    )
  }
}

export default PropertieList;