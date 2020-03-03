import React, { Component } from "react"
import util from "../util/util"
import "../css/propertyModal.css"
import "../css/property.css"

class PropertyModal extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      showModal: false
    };
  }
  
  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    if(!this.state.showModal){
      return (
        <button className="btn btn-primary" onClick={ this.showModal }>
            Details
        </button>
      );
    }

    const { property }  = Object.assign(this.props);
    return (
      <div className="modal" id="modal">
        <h2> Details </h2>
        <div className="content">
          <b>Name: { property.name }</b>
          <b>Area: { util.interval(property.min_area, property.max_area, "m²") }</b>
          <b>Price: { util.formatCurrencyBRL(property.min_price) }</b>
          <b>Bedrooms: { util.interval(property.min_bedrooms, property.max_bedrooms) }</b>
          <b>Suites: { util.interval(property.min_suites, property.max_suites) }</b>
          <b>Parking: { util.interval(property.min_parking, property.max_parking) }</b>
          <b>Bathrooms: { util.interval(property.min_bathrooms, property.min_bathrooms) }</b>
          <b>Address: { property.address.number + ", " + property.address.street_type + " " + property.address.street
                        + ", " + property.address.area + ", " + property.address.city + " - " + property.address.state}</b>

          <hr/>
          <b>Description: { property.description }</b>

        </div>

        <div className="actions">
          <button className="toggle-button" onClick={ this.hideModal }>OK</button>
        </div>
      </div>
    );
  }
}

export default PropertyModal;