import React, { Component, Fragment } from "react"
import Propertie from "./Propertie"

class PropertieList extends Component {
  render() {
    return (
      <Fragment>
        {
          this.props.properties.map(propertie => (
            <Propertie 
              key={ propertie.id }
              propertie={ propertie }/>
          ))
        }
      </Fragment>
    )
  }
}

export default PropertieList;