import React from "react"
import PropertyModal from "./PropertyModal.js"
import util from "../util/util"
import "../css/property.css"

const Property = (props) => {
  const classBtnFavorite = props.property.favorite ? "flash-container btn btn-favorite" : "btn btn-primary";

  return (
    <div id={ props.property.id } className="properties">
      <b>{ props.property.name }</b>
      <b>{ util.formatCurrencyBRL(props.property.min_price) }</b>
      <b>{ props.property.address.city + props.property.address.state }</b>

      <a>
        <img src={`${ props.property.default_image["200x140"] }`} alt={ props.property.name } />
      </a>

      <div className="containerButtons">
        <button className={ classBtnFavorite } onClick={ (e)=> props.addToFavorites(props.property) }> 
          &hearts;
        </button>

        <PropertyModal
          property={ props.property } />
      </div>
    </div>
  )
}

export default Property;